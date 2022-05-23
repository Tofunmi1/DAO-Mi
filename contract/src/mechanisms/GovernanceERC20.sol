//// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
//one token equals one vote
import "../../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract GovernanceERC20 is ERC20 {
    uint256 max_supply = 20_000_000_000_000_000_000;

    constructor() ERC20("DAO-Token", "DAT") {
        _mint(msg.sender, max_supply);
    }

    /// @notice A checkpoint for marking number of votes from a given block
    struct Checkpoint {
        uint32 fromBlock;
        uint96 votes;
    }
    /// @notice A record of votes checkpoints for each account, by index
    mapping(address => mapping(uint32 => Checkpoint)) public checkpoints;
    /// @notice The number of checkpoints for each account
    mapping(address => uint32) public numCheckpoints;

    /**Gotten from compound's getPriorVotes(account, blocKNumber); */
    function getPriorVotes(address account, uint256 blocKNumber)
        public
        view
        returns (uint96)
    {}
}
