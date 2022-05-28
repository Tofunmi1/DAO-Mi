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
  "0x60806040526954b40b1f852bda0000006000553480156200001f57600080fd5b506040516200219238038062002192833981016040819052620000429162000091565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620000c9565b80516001600160a01b03811681146200008c57600080fd5b919050565b60008060408385031215620000a557600080fd5b620000b08362000074565b9150620000c06020840162000074565b90509250929050565b6120b980620000d96000396000f3fe6080604052600436106101855760003560e01c80634f80b30d116100d1578063c01f9e371161008a578063da35c66411610064578063da35c6641461053f578063deaaa7cc14610555578063e48083fe14610589578063f74fe90c1461059f57600080fd5b8063c01f9e37146104c7578063c9b1b005146104e7578063d33219b41461051f57600080fd5b80634f80b30d14610436578063791f5d23146104565780637bdbe4d014610474578063818dbe1014610489578063a64e024a1461049c578063b58131b0146104b357600080fd5b806324bc1a641161013e5780633932abb1116101185780633932abb11461037b5780633e4f49e61461038f57806343859632146103bc5780634634c61f1461041657600080fd5b806324bc1a641461032757806325fd935a1461033d5780632d63f6931461035b57600080fd5b8063013cf08b1461019157806302a251a31461025d57806306fdde031461027c57806315373e3d146102bb57806320606b70146102dd578063215809ca1461031157600080fd5b3661018c57005b600080fd5b34801561019d57600080fd5b506102086101ac3660046117ef565b600460208190526000918252604090912080546001820154600283015460038401549484015460088501546009860154600b870154600c909701546001600160a01b03909616979496939560ff93841694929391929091169089565b604080516001600160a01b03909a168a5260208a0198909852968801959095526060870193909352901515608086015260a085015260c0840152151560e0830152610100820152610120015b60405180910390f35b34801561026957600080fd5b506143805b604051908152602001610254565b34801561028857600080fd5b506102ae6040518060400160405280600681526020016544414f2d4d4960d01b81525081565b6040516102549190611864565b3480156102c757600080fd5b506102db6102d636600461188c565b6105bf565b005b3480156102e957600080fd5b5061026e7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b34801561031d57600080fd5b5061026e61168081565b34801561033357600080fd5b5061026e60005481565b34801561034957600080fd5b5061026e69152d02c7e14af680000081565b34801561036757600080fd5b5061026e6103763660046117ef565b6105ce565b34801561038757600080fd5b50600161026e565b34801561039b57600080fd5b506103af6103aa3660046117ef565b610605565b60405161025491906118d2565b3480156103c857600080fd5b506104066103d7366004611916565b60008281526007602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b6040519015158152602001610254565b34801561042257600080fd5b506102db610431366004611942565b6107c1565b34801561044257600080fd5b5061026e610451366004611b82565b6109c7565b34801561046257600080fd5b5061026e690a968163f0a57b40000081565b34801561048057600080fd5b5061026e600a81565b6102db610497366004611b82565b610db8565b3480156104a857600080fd5b5061026e62013b0081565b3480156104bf57600080fd5b50600061026e565b3480156104d357600080fd5b5061026e6104e23660046117ef565b610ff1565b3480156104f357600080fd5b50600254610507906001600160a01b031681565b6040516001600160a01b039091168152602001610254565b34801561052b57600080fd5b50600154610507906001600160a01b031681565b34801561054b57600080fd5b5061026e60065481565b34801561056157600080fd5b5061026e7f8e25870c07e0b0b3884c78da52790939a455c275406c44ae8b434b692fb916ee81565b34801561059557600080fd5b5061026e619d8081565b3480156105ab57600080fd5b506102db6105ba366004611b82565b611020565b6105ca3383836111ce565b5050565b60008181526003602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b600081600654101580156106195750600082115b61067c5760405162461bcd60e51b815260206004820152602960248201527f476f7665726e6f72416c7068613a3a73746174653a20696e76616c69642070726044820152681bdc1bdcd85b081a5960ba1b60648201526084015b60405180910390fd5b6000828152600460205260409020600b81015460ff16156106a05750600292915050565b806008015443116106b45750600092915050565b806009015443116106c85750600192915050565b806003015481600201541115806106e457506000548160020154105b156106f25750600392915050565b80600c01546000036107075750600492915050565b600481015460ff161561071d5750600792915050565b600160009054906101000a90046001600160a01b03166001600160a01b031663c1a287e26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190611c8a565b81600c01546107a39190611cb9565b42106107b25750600692915050565b50600592915050565b50919050565b604080518082018252600681526544414f2d4d4960d01b60209182015281517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866818301527fb5f8038135e6dfd25288d788032ebfdb920b110f94dfc561db797f5cbfdf059a81840152466060820152306080808301919091528351808303909101815260a0820184528051908301207f8e25870c07e0b0b3884c78da52790939a455c275406c44ae8b434b692fb916ee60c083015260e08201899052871515610100808401919091528451808403909101815261012083019094528351939092019290922061190160f01b6101408401526101428301829052610162830181905290916000906101820160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015610936573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166109b15760405162461bcd60e51b815260206004820152602f60248201527f476f7665726e6f72416c7068613a3a63617374566f746542795369673a20696e60448201526e76616c6964207369676e617475726560881b6064820152608401610673565b6109bc818a8a6111ce565b505050505050505050565b6000806109dd8686858780519060200120611434565b90508451865114610a2a5760405162461bcd60e51b81526020600482015260176024820152760d2dcecc2d8d2c840e0e4dee0dee6c2d840d8cadccee8d604b1b6044820152606401610673565b8251865114610a755760405162461bcd60e51b81526020600482015260176024820152760d2dcecc2d8d2c840e0e4dee0dee6c2d840d8cadccee8d604b1b6044820152606401610673565b6000865111610ab75760405162461bcd60e51b815260206004820152600e60248201526d195b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606401610673565b60068054906000610ac783611cd1565b9091555050600081815260036020526040812090610ae6600143611cb9565b90506000610aff6143806001600160401b038416611cb9565b90506000604051806101a00160405280336001600160a01b0316815260200186815260200160008152602001600081526020016000151581526020018b81526020018a8152602001888152602001846001600160401b03168152602001836001600160401b031681526020018b516001600160401b03811115610b8457610b8461199a565b604051908082528060200260200182016040528015610bb757816020015b6060815260200190600190039081610ba25790505b50815260006020808301829052604092830182905283810180518352600480835292849020855181546001600160a01b0319166001600160a01b0390911617815590516001820155928401516002840155606084015160038401556080840151918301805460ff19169215159290921790915560a083015180519394508493610c46926005850192019061159e565b5060c08201518051610c62916006840191602090910190611603565b5060e08201518051610c7e91600784019160209091019061163e565b50610100820151600882015561012082015160098201556101408201518051610cb191600a840191602090910190611697565b50610160820151600b8201805460ff191691151591909117905561018090910151600c90910155610cfb8484815467ffffffffffffffff19166001600160401b0391909116179055565b60018401805467ffffffffffffffff19166001600160401b0384161790557fa2a75a64778d4d85f6d92944a9203eabdfafbd0c818367b6d13ba2913128840d858b8b8d516001600160401b03811115610d5657610d5661199a565b604051908082528060200260200182016040528015610d8957816020015b6060815260200190600190039081610d745790505b508b888833604051610da2989796959493929190611db3565b60405180910390a1509298975050505050505050565b6000610dcd8585848680519060200120611434565b6000818152600460208190526040909120908101805460ff191660011790559091506005610dfa83610605565b6007811115610e0b57610e0b6118bc565b14610e8c5760405162461bcd60e51b815260206004820152604560248201527f476f7665726e6f72416c7068613a3a657865637574653a2070726f706f73616c60448201527f2063616e206f6e6c7920626520657865637574656420696620697420697320716064820152641d595d595960da1b608482015260a401610673565b600086516001600160401b03811115610ea757610ea761199a565b604051908082528060200260200182016040528015610eda57816020015b6060815260200190600190039081610ec55790505b50905060005b8751811015610fe75760015488516001600160a01b0390911690630825f38f908a9084908110610f1257610f12611e8e565b6020026020010151898481518110610f2c57610f2c611e8e565b6020026020010151858581518110610f4657610f46611e8e565b6020026020010151898681518110610f6057610f60611e8e565b602002602001015188600c01546040518663ffffffff1660e01b8152600401610f8d959493929190611ea4565b6000604051808303816000875af1158015610fac573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fd49190810190611ef0565b5080610fdf81611cd1565b915050610ee0565b5050505050505050565b60008181526003602090815260408083208151928301909152600101546001600160401b0316908190526105f6565b60006110358585848680519060200120611434565b600081815260046020819052604090912091925061105283610605565b6007811115611063576110636118bc565b1461106d57600080fd5b60015460408051630d48571f60e31b815290516000926001600160a01b031691636a42b8f89160048083019260209291908290030181865afa1580156110b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110db9190611c8a565b6110e59042611cb9565b9050600087516001600160401b038111156111025761110261199a565b60405190808252806020026020018201604052801561113557816020015b60608152602001906001900390816111205790505b50600c8401839055905060005b88518110156109bc576111bc89828151811061116057611160611e8e565b602002602001015189838151811061117a5761117a611e8e565b602002602001015184848151811061119457611194611e8e565b60200260200101518985815181106111ae576111ae611e8e565b60200260200101518761146e565b806111c681611cd1565b915050611142565b60016111d983610605565b60078111156111ea576111ea6118bc565b146112375760405162461bcd60e51b815260206004820152601b60248201527f5f63617374566f74653a20766f74696e6720697320636c6f73656400000000006044820152606401610673565b6000828152600460209081526040808320600783528184206001600160a01b03881685526003810190935292205460ff16156112cb5760405162461bcd60e51b815260206004820152602d60248201527f476f7665726e6f72416c7068613a3a5f63617374566f74653a20766f7465722060448201526c185b1c9958591e481d9bdd1959609a1b6064820152608401610673565b600254600883015460405163782d6fe160e01b81526000926001600160a01b03169163782d6fe191611315918a916004016001600160a01b03929092168252602082015260400190565b602060405180830381865afa158015611332573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113569190611f66565b9050831561138157806001600160601b031683600201546113779190611cb9565b60028401556113a0565b806001600160601b0316836003015461139a9190611cb9565b60038401555b6001600160a01b038616600081815260038481016020908152604092839020805460ff1916600190811790915591870154865560028701549186019190915581519283528201879052851515908201526001600160601b03821660608201527f877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c469060800160405180910390a1505050505050565b60008484848460405160200161144d9493929190611f8f565b60408051601f19818403018152919052805160209091012095945050505050565b6001546040516001600160a01b039091169063f2b065379061149c9088908890889088908890602001611fda565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016114d091815260200190565b602060405180830381865afa1580156114ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115119190612032565b1561151b57600080fd5b600154604051633a66f90160e01b81526001600160a01b0390911690633a66f901906115539088908890889088908890600401611ea4565b6020604051808303816000875af1158015611572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115969190611c8a565b505050505050565b8280548282559060005260206000209081019282156115f3579160200282015b828111156115f357825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906115be565b506115ff9291506116f0565b5090565b8280548282559060005260206000209081019282156115f3579160200282015b828111156115f3578251825591602001919060010190611623565b82805482825590600052602060002090810192821561168b579160200282015b8281111561168b578251805161167b918491602090910190611705565b509160200191906001019061165e565b506115ff929150611778565b8280548282559060005260206000209081019282156116e4579160200282015b828111156116e457825180516116d4918491602090910190611705565b50916020019190600101906116b7565b506115ff929150611795565b5b808211156115ff57600081556001016116f1565b8280546117119061204f565b90600052602060002090601f01602090048101928261173357600085556115f3565b82601f1061174c57805160ff19168380011785556115f3565b828001600101855582156115f357918201828111156115f3578251825591602001919060010190611623565b808211156115ff57600061178c82826117b2565b50600101611778565b808211156115ff5760006117a982826117b2565b50600101611795565b5080546117be9061204f565b6000825580601f106117ce575050565b601f0160209004906000526020600020908101906117ec91906116f0565b50565b60006020828403121561180157600080fd5b5035919050565b60005b8381101561182357818101518382015260200161180b565b83811115611832576000848401525b50505050565b60008151808452611850816020860160208601611808565b601f01601f19169290920160200192915050565b6020815260006118776020830184611838565b9392505050565b80151581146117ec57600080fd5b6000806040838503121561189f57600080fd5b8235915060208301356118b18161187e565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b60208101600883106118f457634e487b7160e01b600052602160045260246000fd5b91905290565b80356001600160a01b038116811461191157600080fd5b919050565b6000806040838503121561192957600080fd5b82359150611939602084016118fa565b90509250929050565b600080600080600060a0868803121561195a57600080fd5b85359450602086013561196c8161187e565b9350604086013560ff8116811461198257600080fd5b94979396509394606081013594506080013592915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156119d8576119d861199a565b604052919050565b60006001600160401b038211156119f9576119f961199a565b5060051b60200190565b600082601f830112611a1457600080fd5b81356020611a29611a24836119e0565b6119b0565b82815260059290921b84018101918181019086841115611a4857600080fd5b8286015b84811015611a635780358352918301918301611a4c565b509695505050505050565b60006001600160401b03821115611a8757611a8761199a565b50601f01601f191660200190565b6000611aa3611a2484611a6e565b9050828152838383011115611ab757600080fd5b828260208301376000602084830101529392505050565b600082601f830112611adf57600080fd5b61187783833560208501611a95565b600082601f830112611aff57600080fd5b81356020611b0f611a24836119e0565b82815260059290921b84018101918181019086841115611b2e57600080fd5b8286015b84811015611a635780356001600160401b03811115611b515760008081fd5b8701603f81018913611b635760008081fd5b611b74898683013560408401611a95565b845250918301918301611b32565b60008060008060808587031215611b9857600080fd5b84356001600160401b0380821115611baf57600080fd5b818701915087601f830112611bc357600080fd5b81356020611bd3611a24836119e0565b82815260059290921b8401810191818101908b841115611bf257600080fd5b948201945b83861015611c1757611c08866118fa565b82529482019490820190611bf7565b98505088013592505080821115611c2d57600080fd5b611c3988838901611a03565b94506040870135915080821115611c4f57600080fd5b611c5b88838901611ace565b93506060870135915080821115611c7157600080fd5b50611c7e87828801611aee565b91505092959194509250565b600060208284031215611c9c57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ccc57611ccc611ca3565b500190565b600060018201611ce357611ce3611ca3565b5060010190565b600081518084526020808501945080840160005b83811015611d235781516001600160a01b031687529582019590820190600101611cfe565b509495945050505050565b600081518084526020808501945080840160005b83811015611d2357815187529582019590820190600101611d42565b600081518084526020808501808196508360051b8101915082860160005b85811015611da6578284038952611d94848351611838565b98850198935090840190600101611d7c565b5091979650505050505050565b60006101008a835260208181850152611dce8285018c611cea565b91508382036040850152611de2828b611d2e565b915083820360608501528189518084528284019150828160051b850101838c0160005b83811015611e3357601f19878403018552611e21838351611838565b94860194925090850190600101611e05565b50508681036080880152611e47818c611d5e565b95505050505050611e6360a08301866001600160401b03169052565b6001600160401b03841660c08301526001600160a01b03831660e08301529998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60018060a01b038616815284602082015260a060408201526000611ecb60a0830186611838565b8281036060840152611edd8186611838565b9150508260808301529695505050505050565b600060208284031215611f0257600080fd5b81516001600160401b03811115611f1857600080fd5b8201601f81018413611f2957600080fd5b8051611f37611a2482611a6e565b818152856020838501011115611f4c57600080fd5b611f5d826020830160208601611808565b95945050505050565b600060208284031215611f7857600080fd5b81516001600160601b038116811461187757600080fd5b608081526000611fa26080830187611cea565b8281036020840152611fb48187611d2e565b90508281036040840152611fc88186611d5e565b91505082606083015295945050505050565b6001600160601b03198660601b16815284601482015260008451612005816034850160208901611808565b84519083019061201c816034840160208901611808565b0160348101939093525050605401949350505050565b60006020828403121561204457600080fd5b81516118778161187e565b600181811c9082168061206357607f821691505b6020821081036107bb57634e487b7160e01b600052602260045260246000fdfea2646970667358221220943da9150f26c84f4b9d4437ee6afdf085a782405b1a958fb558f94c9e91dea364736f6c634300080d0033";

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
