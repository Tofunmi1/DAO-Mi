/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC20VoteInterface,
  ERC20VoteInterfaceInterface,
} from "../ERC20VoteInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC20VoteInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20VoteInterfaceInterface {
    return new utils.Interface(_abi) as ERC20VoteInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20VoteInterface {
    return new Contract(address, _abi, signerOrProvider) as ERC20VoteInterface;
  }
}
