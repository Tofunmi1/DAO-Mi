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

  event ProposalCreated(address[] targets, uint[] values, string[] signatures,bytes[] calldatas, uint256 startBlock,uint256 endBlock);

      receive() external payable virtual {
        // require(_executor() == address(this));
  }

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

  function queue(address[] memory targets, uint[] memory values, string memory description,bytes[] memory calldatas) public pure{
    uint256 propasalId = hashProposal(targets, values, calldatas, keccak256(bytes(description)));
  }

  function state(uint proposalId) public {

  }  
}

interface TimelockInterface {
    function delay() external view returns (uint);
    function GRACE_PERIOD() external view returns (uint);
    function acceptAdmin() external;
    function queuedTransactions(bytes32 hash) external view returns (bool);
    function queueTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external returns (bytes32);
    function cancelTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external;
    function executeTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external payable returns (bytes memory);
}
