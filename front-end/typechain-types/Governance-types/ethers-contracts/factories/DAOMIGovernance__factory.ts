/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DAOMIGovernance,
  DAOMIGovernanceInterface,
} from "../DAOMIGovernance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc20VoteToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "support",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "VoteCastWithParams",
    type: "event",
  },
  {
    inputs: [],
    name: "BALLOT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_PROPOSAL_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_VOTING_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_PROPOSAL_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_VOTING_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_VOTING_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "castVoteBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20VoteToken",
    outputs: [
      {
        internalType: "contract ERC20VoteInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalMaxOperations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVoters",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVoters",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "quorumVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum DAOMIGovernance.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract TimelockInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526954b40b1f852bda0000006000553480156200001f57600080fd5b506040516200220438038062002204833981016040819052620000429162000091565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620000c9565b80516001600160a01b03811681146200008c57600080fd5b919050565b60008060408385031215620000a557600080fd5b620000b08362000074565b9150620000c06020840162000074565b90509250929050565b61212b80620000d96000396000f3fe6080604052600436106101855760003560e01c80634f80b30d116100d1578063c01f9e371161008a578063da35c66411610064578063da35c664146104b2578063deaaa7cc146104c8578063e48083fe146104fc578063f74fe90c1461051257600080fd5b8063c01f9e371461043a578063c9b1b0051461045a578063d33219b41461049257600080fd5b80634f80b30d146103a9578063791f5d23146103c95780637bdbe4d0146103e7578063818dbe10146103fc578063a64e024a1461040f578063b58131b01461042657600080fd5b806324bc1a641161013e5780633932abb1116101185780633932abb1146102ee5780633e4f49e614610302578063438596321461032f5780634634c61f1461038957600080fd5b806324bc1a641461029a57806325fd935a146102b05780632d63f693146102ce57600080fd5b8063013cf08b1461019157806302a251a3146101d057806306fdde03146101ef57806315373e3d1461022e57806320606b7014610250578063215809ca1461028457600080fd5b3661018c57005b600080fd5b34801561019d57600080fd5b506101b16101ac3660046117f8565b610532565b6040516101c79a9998979695949392919061186d565b60405180910390f35b3480156101dc57600080fd5b506143805b6040519081526020016101c7565b3480156101fb57600080fd5b506102216040518060400160405280600681526020016544414f2d4d4960d01b81525081565b6040516101c791906118d6565b34801561023a57600080fd5b5061024e6102493660046118fe565b61061f565b005b34801561025c57600080fd5b506101e17f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b34801561029057600080fd5b506101e161168081565b3480156102a657600080fd5b506101e160005481565b3480156102bc57600080fd5b506101e169152d02c7e14af680000081565b3480156102da57600080fd5b506101e16102e93660046117f8565b61062e565b3480156102fa57600080fd5b5060016101e1565b34801561030e57600080fd5b5061032261031d3660046117f8565b610665565b6040516101c79190611944565b34801561033b57600080fd5b5061037961034a366004611988565b60008281526007602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b60405190151581526020016101c7565b34801561039557600080fd5b5061024e6103a43660046119b4565b6107aa565b3480156103b557600080fd5b506101e16103c4366004611bf4565b6109b5565b3480156103d557600080fd5b506101e1690a968163f0a57b40000081565b3480156103f357600080fd5b506101e1600a81565b61024e61040a366004611bf4565b610dc1565b34801561041b57600080fd5b506101e162013b0081565b34801561043257600080fd5b5060006101e1565b34801561044657600080fd5b506101e16104553660046117f8565b610ffa565b34801561046657600080fd5b5060025461047a906001600160a01b031681565b6040516001600160a01b0390911681526020016101c7565b34801561049e57600080fd5b5060015461047a906001600160a01b031681565b3480156104be57600080fd5b506101e160065481565b3480156104d457600080fd5b506101e17f8e25870c07e0b0b3884c78da52790939a455c275406c44ae8b434b692fb916ee81565b34801561050857600080fd5b506101e1619d8081565b34801561051e57600080fd5b5061024e61052d366004611bf4565b611029565b600460208190526000918252604090912080546001820154600283015460038401549484015460088501546009860154600b870154600c880154600d890180546001600160a01b039099169a9799969860ff96871697959694959490931693919261059c90611cfc565b80601f01602080910402602001604051908101604052809291908181526020018280546105c890611cfc565b80156106155780601f106105ea57610100808354040283529160200191610615565b820191906000526020600020905b8154815290600101906020018083116105f857829003601f168201915b505050505090508a565b61062a3383836111d7565b5050565b60008181526003602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b6000818152600460205260408120600b81015460ff16156106895750600292915050565b8060080154431161069d5750600092915050565b806009015443116106b15750600192915050565b806003015481600201541115806106cd57506000548160020154105b156106db5750600392915050565b80600c01546000036106f05750600492915050565b600481015460ff16156107065750600792915050565b600160009054906101000a90046001600160a01b03166001600160a01b031663c1a287e26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610759573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077d9190611d30565b81600c015461078c9190611d5f565b421061079b5750600692915050565b50600592915050565b50919050565b604080518082018252600681526544414f2d4d4960d01b60209182015281517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866818301527fb5f8038135e6dfd25288d788032ebfdb920b110f94dfc561db797f5cbfdf059a81840152466060820152306080808301919091528351808303909101815260a0820184528051908301207f8e25870c07e0b0b3884c78da52790939a455c275406c44ae8b434b692fb916ee60c083015260e08201899052871515610100808401919091528451808403909101815261012083019094528351939092019290922061190160f01b6101408401526101428301829052610162830181905290916000906101820160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa15801561091f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661099f5760405162461bcd60e51b815260206004820152602f60248201527f476f7665726e6f72416c7068613a3a63617374566f746542795369673a20696e60448201526e76616c6964207369676e617475726560881b60648201526084015b60405180910390fd5b6109aa818a8a6111d7565b505050505050505050565b6000806109cb868685878051906020012061143d565b90508451865114610a185760405162461bcd60e51b81526020600482015260176024820152760d2dcecc2d8d2c840e0e4dee0dee6c2d840d8cadccee8d604b1b6044820152606401610996565b8251865114610a635760405162461bcd60e51b81526020600482015260176024820152760d2dcecc2d8d2c840e0e4dee0dee6c2d840d8cadccee8d604b1b6044820152606401610996565b6000865111610aa55760405162461bcd60e51b815260206004820152600e60248201526d195b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606401610996565b60068054906000610ab583611d77565b9091555050600081815260036020526040812090610ad4600143611d5f565b90506000610aed6143806001600160401b038416611d5f565b90506000604051806101c00160405280336001600160a01b0316815260200186815260200160008152602001600081526020016000151581526020018b81526020018a8152602001888152602001846001600160401b03168152602001836001600160401b031681526020018b516001600160401b03811115610b7257610b72611a0c565b604051908082528060200260200182016040528015610ba557816020015b6060815260200190600190039081610b905790505b50815260006020808301829052604080840183905260609384018d905284820180518452600480845293829020865181546001600160a01b0319166001600160a01b03909116178155905160018201559085015160028201559284015160038401556080840151918301805460ff19169215159290921790915560a083015180519394508493610c3b92600585019201906115a7565b5060c08201518051610c5791600684019160209091019061160c565b5060e08201518051610c73916007840191602090910190611647565b50610100820151600882015561012082015160098201556101408201518051610ca691600a8401916020909101906116a0565b50610160820151600b8201805460ff1916911515919091179055610180820151600c8201556101a08201518051610ce791600d8401916020909101906116f9565b5050845467ffffffffffffffff19166001600160401b0385161785555060018401805467ffffffffffffffff19166001600160401b0384161790557fa2a75a64778d4d85f6d92944a9203eabdfafbd0c818367b6d13ba2913128840d858b8b8d516001600160401b03811115610d5f57610d5f611a0c565b604051908082528060200260200182016040528015610d9257816020015b6060815260200190600190039081610d7d5790505b508b888833604051610dab989796959493929190611e59565b60405180910390a1509298975050505050505050565b6000610dd6858584868051906020012061143d565b6000818152600460208190526040909120908101805460ff191660011790559091506005610e0383610665565b6007811115610e1457610e1461192e565b14610e955760405162461bcd60e51b815260206004820152604560248201527f476f7665726e6f72416c7068613a3a657865637574653a2070726f706f73616c60448201527f2063616e206f6e6c7920626520657865637574656420696620697420697320716064820152641d595d595960da1b608482015260a401610996565b600086516001600160401b03811115610eb057610eb0611a0c565b604051908082528060200260200182016040528015610ee357816020015b6060815260200190600190039081610ece5790505b50905060005b8751811015610ff05760015488516001600160a01b0390911690630825f38f908a9084908110610f1b57610f1b611f34565b6020026020010151898481518110610f3557610f35611f34565b6020026020010151858581518110610f4f57610f4f611f34565b6020026020010151898681518110610f6957610f69611f34565b602002602001015188600c01546040518663ffffffff1660e01b8152600401610f96959493929190611f4a565b6000604051808303816000875af1158015610fb5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fdd9190810190611f96565b5080610fe881611d77565b915050610ee9565b5050505050505050565b60008181526003602090815260408083208151928301909152600101546001600160401b031690819052610656565b600061103e858584868051906020012061143d565b600081815260046020819052604090912091925061105b83610665565b600781111561106c5761106c61192e565b1461107657600080fd5b60015460408051630d48571f60e31b815290516000926001600160a01b031691636a42b8f89160048083019260209291908290030181865afa1580156110c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e49190611d30565b6110ee9042611d5f565b9050600087516001600160401b0381111561110b5761110b611a0c565b60405190808252806020026020018201604052801561113e57816020015b60608152602001906001900390816111295790505b50600c8401839055905060005b88518110156109aa576111c589828151811061116957611169611f34565b602002602001015189838151811061118357611183611f34565b602002602001015184848151811061119d5761119d611f34565b60200260200101518985815181106111b7576111b7611f34565b602002602001015187611477565b806111cf81611d77565b91505061114b565b60016111e283610665565b60078111156111f3576111f361192e565b146112405760405162461bcd60e51b815260206004820152601b60248201527f5f63617374566f74653a20766f74696e6720697320636c6f73656400000000006044820152606401610996565b6000828152600460209081526040808320600783528184206001600160a01b03881685526003810190935292205460ff16156112d45760405162461bcd60e51b815260206004820152602d60248201527f476f7665726e6f72416c7068613a3a5f63617374566f74653a20766f7465722060448201526c185b1c9958591e481d9bdd1959609a1b6064820152608401610996565b600254600883015460405163782d6fe160e01b81526000926001600160a01b03169163782d6fe19161131e918a916004016001600160a01b03929092168252602082015260400190565b602060405180830381865afa15801561133b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135f919061200c565b9050831561138a57806001600160601b031683600201546113809190611d5f565b60028401556113a9565b806001600160601b031683600301546113a39190611d5f565b60038401555b6001600160a01b038616600081815260038481016020908152604092839020805460ff1916600190811790915591870154865560028701549186019190915581519283528201879052851515908201526001600160601b03821660608201527f877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c469060800160405180910390a1505050505050565b6000848484846040516020016114569493929190612035565b60408051601f19818403018152919052805160209091012095945050505050565b6001546040516001600160a01b039091169063f2b06537906114a59088908890889088908890602001612080565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016114d991815260200190565b602060405180830381865afa1580156114f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151a91906120d8565b1561152457600080fd5b600154604051633a66f90160e01b81526001600160a01b0390911690633a66f9019061155c9088908890889088908890600401611f4a565b6020604051808303816000875af115801561157b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159f9190611d30565b505050505050565b8280548282559060005260206000209081019282156115fc579160200282015b828111156115fc57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906115c7565b5061160892915061176c565b5090565b8280548282559060005260206000209081019282156115fc579160200282015b828111156115fc57825182559160200191906001019061162c565b828054828255906000526020600020908101928215611694579160200282015b8281111561169457825180516116849184916020909101906116f9565b5091602001919060010190611667565b50611608929150611781565b8280548282559060005260206000209081019282156116ed579160200282015b828111156116ed57825180516116dd9184916020909101906116f9565b50916020019190600101906116c0565b5061160892915061179e565b82805461170590611cfc565b90600052602060002090601f01602090048101928261172757600085556115fc565b82601f1061174057805160ff19168380011785556115fc565b828001600101855582156115fc57918201828111156115fc57825182559160200191906001019061162c565b5b80821115611608576000815560010161176d565b8082111561160857600061179582826117bb565b50600101611781565b808211156116085760006117b282826117bb565b5060010161179e565b5080546117c790611cfc565b6000825580601f106117d7575050565b601f0160209004906000526020600020908101906117f5919061176c565b50565b60006020828403121561180a57600080fd5b5035919050565b60005b8381101561182c578181015183820152602001611814565b8381111561183b576000848401525b50505050565b60008151808452611859816020860160208601611811565b601f01601f19169290920160200192915050565b600061014060018060a01b038d1683528b60208401528a604084015289606084015288151560808401528760a08401528660c084015285151560e084015284610100840152806101208401526118c581840185611841565b9d9c50505050505050505050505050565b6020815260006118e96020830184611841565b9392505050565b80151581146117f557600080fd5b6000806040838503121561191157600080fd5b823591506020830135611923816118f0565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b602081016008831061196657634e487b7160e01b600052602160045260246000fd5b91905290565b80356001600160a01b038116811461198357600080fd5b919050565b6000806040838503121561199b57600080fd5b823591506119ab6020840161196c565b90509250929050565b600080600080600060a086880312156119cc57600080fd5b8535945060208601356119de816118f0565b9350604086013560ff811681146119f457600080fd5b94979396509394606081013594506080013592915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611a4a57611a4a611a0c565b604052919050565b60006001600160401b03821115611a6b57611a6b611a0c565b5060051b60200190565b600082601f830112611a8657600080fd5b81356020611a9b611a9683611a52565b611a22565b82815260059290921b84018101918181019086841115611aba57600080fd5b8286015b84811015611ad55780358352918301918301611abe565b509695505050505050565b60006001600160401b03821115611af957611af9611a0c565b50601f01601f191660200190565b6000611b15611a9684611ae0565b9050828152838383011115611b2957600080fd5b828260208301376000602084830101529392505050565b600082601f830112611b5157600080fd5b6118e983833560208501611b07565b600082601f830112611b7157600080fd5b81356020611b81611a9683611a52565b82815260059290921b84018101918181019086841115611ba057600080fd5b8286015b84811015611ad55780356001600160401b03811115611bc35760008081fd5b8701603f81018913611bd55760008081fd5b611be6898683013560408401611b07565b845250918301918301611ba4565b60008060008060808587031215611c0a57600080fd5b84356001600160401b0380821115611c2157600080fd5b818701915087601f830112611c3557600080fd5b81356020611c45611a9683611a52565b82815260059290921b8401810191818101908b841115611c6457600080fd5b948201945b83861015611c8957611c7a8661196c565b82529482019490820190611c69565b98505088013592505080821115611c9f57600080fd5b611cab88838901611a75565b94506040870135915080821115611cc157600080fd5b611ccd88838901611b40565b93506060870135915080821115611ce357600080fd5b50611cf087828801611b60565b91505092959194509250565b600181811c90821680611d1057607f821691505b6020821081036107a457634e487b7160e01b600052602260045260246000fd5b600060208284031215611d4257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611d7257611d72611d49565b500190565b600060018201611d8957611d89611d49565b5060010190565b600081518084526020808501945080840160005b83811015611dc95781516001600160a01b031687529582019590820190600101611da4565b509495945050505050565b600081518084526020808501945080840160005b83811015611dc957815187529582019590820190600101611de8565b600081518084526020808501808196508360051b8101915082860160005b85811015611e4c578284038952611e3a848351611841565b98850198935090840190600101611e22565b5091979650505050505050565b60006101008a835260208181850152611e748285018c611d90565b91508382036040850152611e88828b611dd4565b915083820360608501528189518084528284019150828160051b850101838c0160005b83811015611ed957601f19878403018552611ec7838351611841565b94860194925090850190600101611eab565b50508681036080880152611eed818c611e04565b95505050505050611f0960a08301866001600160401b03169052565b6001600160401b03841660c08301526001600160a01b03831660e08301529998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60018060a01b038616815284602082015260a060408201526000611f7160a0830186611841565b8281036060840152611f838186611841565b9150508260808301529695505050505050565b600060208284031215611fa857600080fd5b81516001600160401b03811115611fbe57600080fd5b8201601f81018413611fcf57600080fd5b8051611fdd611a9682611ae0565b818152856020838501011115611ff257600080fd5b612003826020830160208601611811565b95945050505050565b60006020828403121561201e57600080fd5b81516001600160601b03811681146118e957600080fd5b6080815260006120486080830187611d90565b828103602084015261205a8187611dd4565b9050828103604084015261206e8186611e04565b91505082606083015295945050505050565b6001600160601b03198660601b168152846014820152600084516120ab816034850160208901611811565b8451908301906120c2816034840160208901611811565b0160348101939093525050605401949350505050565b6000602082840312156120ea57600080fd5b81516118e9816118f056fea2646970667358221220c04c045a92c76e3d042656d42a892a67bd55ae8e2c193666bbd3e4f1479ce4f564736f6c634300080d0033";

type DAOMIGovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOMIGovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAOMIGovernance__factory extends ContractFactory {
  constructor(...args: DAOMIGovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _timelock: string,
    _erc20VoteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAOMIGovernance> {
    return super.deploy(
      _timelock,
      _erc20VoteToken,
      overrides || {}
    ) as Promise<DAOMIGovernance>;
  }
  override getDeployTransaction(
    _timelock: string,
    _erc20VoteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _timelock,
      _erc20VoteToken,
      overrides || {}
    );
  }
  override attach(address: string): DAOMIGovernance {
    return super.attach(address) as DAOMIGovernance;
  }
  override connect(signer: Signer): DAOMIGovernance__factory {
    return super.connect(signer) as DAOMIGovernance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOMIGovernanceInterface {
    return new utils.Interface(_abi) as DAOMIGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAOMIGovernance {
    return new Contract(address, _abi, signerOrProvider) as DAOMIGovernance;
  }
}
