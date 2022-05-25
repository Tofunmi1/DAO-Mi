//// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
//one token equals one vote
import "../lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20VotesComp.sol";
contract GovernanceERC20 is ERC20VotesComp {
    uint256 max_supply = 10000000e18; //10,000,000 DAT

    constructor() ERC20("DAO-Token", "DAT") ERC20Permit("ERC-20 Example") {
        _mint(msg.sender, max_supply);
    }
}
