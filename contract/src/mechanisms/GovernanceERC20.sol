//// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
//one token equals one vote
import "../../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract GovernanceERC20 is ERC20{
 uint max_supply = 20_000_000_000_000_000_000;

 constructor() ERC20("DAO-Token", "DAT") {
  _mint(msg.sender, max_supply);
 }

}