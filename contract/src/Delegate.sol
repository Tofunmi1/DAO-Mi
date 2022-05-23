// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "contract/src/mechanisms/Timers.sol";

contract DAOMIGovernance {
  using Timers for Timers.BlockNumber;
  string public constant name = "DAO-MI";

  uint public constant MIN_PROPOSAL_THRESHOLD = 50000e18; // 50,000 DAT

  uint public constant MAX_PROPOSAL_THRESHOLD = 100000e18; //100,000 DAT

  uint public constant MIN_VOTING_PERIOD = 5760; // About 24 hours

  uint public constant MAX_VOTING_PERIOD = 80640; // About 2 weeks

  uint public constant MIN_VOTING_DELAY = 40320;

  ///4% of DAT our ERC20 token
  uint public quorumVotes = 400000e18;

  
  uint public constant proposalMaxOperations = 10; // 10 actions
  
  TimelockInterface public timelock;

  struct Propose{
    address proposer;
    uint id;
    uint forVoters;
    uint againstVoters;
    bool queued;
    bool executed;
    address[] targets;
    uint[] values;
    bytes[] calldatas;
    uint startBlock;
    uint endBlock;
    string[] signatures;
  }

  struct ProposalCore {
    Timers.BlockNumber voteStart;
    Timers.BlockNumber voteEnd;
    bool executed;
    bool canceled;
  }

  enum ProposalState {
    Pending,
    Active,
    Canceled,
    Defeated,
    Succeeded,
    Queued,
    Expired,
    Executed
  }

  

  mapping(uint256 => ProposalCore) private _proposals; 
  
  mapping(uint256 => bytes32) private _timelockIds;
  
  uint public proposalCount;
  
  /**@dev  events*/
  event ProposalCreated(address[] targets, uint[] values, string[] signatures,bytes[] calldatas, uint256 startBlock,uint256 endBlock);

      receive() external payable virtual {
        // require(_executor() == address(this));
  }
  event ProposalCanceled(uint256 proposalId);


  event ProposalExecuted(uint256 proposalId);

  event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason);

  event VoteCastWithParams(
      address indexed voter,
      uint256 proposalId,
      uint8 support,
      uint256 weight,
      string reason,
      bytes params
  );

  /**+++++++=======================================+++++👽Vote count and vote code 👽+++++===========================================================*/
  enum voteType{
    For,
    Against,
    Fence
  }

  struct ProposalVote{
    uint256 againstVote;
    uint256 forVotes;
    uint256 fenceVotes;
    mapping(address => bool) hasVoted;
  }

  mapping(uint256 => ProposalVote) private _proposalVotes;

  function hasVoted(uint256 proposalId, address account) public view returns (bool) {
     return _proposalVotes[proposalId].hasVoted[account];
  }

  function _quorumReached(uint256 proposalId) internal view returns(bool){
    ProposalVote storage proposalvote = _proposalVotes[proposalId];
    return (quorumVotes <= (proposalvote.againstVote + proposalvote.forVotes));
  }

  function _voteSucceeded(uint256 proposalId) internal view returns(bool){
    ProposalVote storage proposalvote = _proposalVotes[proposalId];
    if(proposalvote.forVotes > proposalvote.againstVote){
      return true;
    }
    return false;
  }
  /**+++++++============================================+++Vote count+++++===============================================================*/

  /**constructor for our governancedelegate our main or core contract */
  constructor(address _timelock){
   timelock = TimelockInterface(_timelock); 
  }

  function votingDelay() public pure returns (uint) { return 1; } // 1 block
  function votingPeriod() public pure returns (uint) { return 17280; } // ~3 days in blocks (assuming 15s blocks)

  function hashProposal(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) internal pure returns(uint256){
   return uint256(keccak256(abi.encode(targets, values, calldatas, descriptionHash))); 
  }

  function propose(address[] memory targets, uint[] memory values, string memory description,bytes[] memory calldatas) public virtual returns(uint256){
    uint256 propasalId = hashProposal(targets, values, calldatas, keccak256(bytes(description)));
    require(targets.length == values.length, "invalid proposal length");
    require(targets.length == calldatas.length, "invalid proposal length");
    require(targets.length > 0, "empty proposal");
    proposalCount++; 
    ProposalCore storage propasal = _proposals[propasalId];
    
    uint64 snapshot = uint64(block.number + votingDelay());
    uint64 deadline = uint64(snapshot + votingPeriod());

    propasal.voteStart.setDeadline(snapshot);
    propasal.voteEnd.setDeadline(deadline);

    require(propasal.voteStart.isUnset(), "propoasl exists");
    emit ProposalCreated(targets, values, new string[](targets.length), calldatas,snapshot, deadline);
    return propasalId;
  }

  function queue(address[] memory targets, uint[] memory values, string memory description,bytes[] memory calldatas) public {
    uint256 proposalId = hashProposal(targets, values, calldatas, keccak256(bytes(description)));
    require(state(proposalId) == ProposalState.Succeeded);
    uint eta = (block.timestamp + timelock.delay());
    string[] memory signatures =  new string[](targets.length);

    for(uint i = 0; i < targets.length; i++){
      _queueOrRevert(targets[i], values[i], signatures[i], calldatas[i], eta);
    }
  }
  function _queueOrRevert(address target, uint value, string memory signature, bytes memory data, uint eta) internal{
  }  

  function state(uint proposalId) public view returns(ProposalState){
    ProposalCore storage proposal = _proposals[proposalId];
    if(proposal.executed){
      return ProposalState.Executed;
    }
    if(proposal.canceled){
      return ProposalState.Canceled;
    }

    uint256 snapshot = proposalSnapshot(proposalId);

    if(snapshot == 0){
      revert("unknown proposalId");
    }
    
    if(snapshot >= block.number){
      return ProposalState.Pending;
    }

    uint256 deadline = proposalDeadline(proposalId);

    if(deadline >= block.number){
      return ProposalState.Active; 
    }

    if(_quorumReached(proposalId) && _voteSucceeded(proposalId)){
      return ProposalState.Succeeded;
    }else{
      return ProposalState.Defeated;
    }
  }
  
  function proposalSnapshot(uint256 proposalId) public view returns (uint256) {
      return _proposals[proposalId].voteStart.getDeadline();
  }
  function proposalDeadline(uint256 proposalId) public view returns (uint256) {
      return _proposals[proposalId].voteEnd.getDeadline();
  }
  /**
   * @dev "The number of votes required in order for a voter to become a proposer"_.
   */
  function proposalThreshold() public view virtual returns (uint256) {
      return 0;
    
}
}

/**Timelock idea 💥 gotten from compound */
interface TimelockInterface {
    function delay() external view returns (uint);
    function GRACE_PERIOD() external view returns (uint);
    function acceptAdmin() external;
    function queuedTransactions(bytes32 hash) external view returns (bool);
    function queueTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external returns (bytes32);
    function cancelTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external;
    function executeTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external payable returns (bytes memory);
}
