import { ethers } from "ethers";
import React, { MouseEventHandler, useState } from "react";
import { DAOMIGovernance__factory } from "../typechain-types/Governance-types/ethers-contracts";

export interface ProposalProps {
  proposalId: ethers.BigNumber;
  description: string;
  forVoters: string;
  againstVoters: string;
}

const Proposal = ({
  description,
  forVoters,
  againstVoters,
  proposalId,
}: ProposalProps) => {
  const [voteStatus, setVoteStatus] = useState<number>(1);

  const DAOGovernanceAddrRikenby: string =
    "0xe1dabe4ac634b82c94d047a9c88cf0f0b9f4e903";

  const DAOGovernanceAddrHardHatNode: string =
    "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

  const handleForVote: MouseEventHandler<HTMLButtonElement> = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddrHardHatNode,
      signer
    );
    await contract.castVote(proposalId, true).then((tx) => console.log(tx));
  };

  const handleAgainstVote: MouseEventHandler<HTMLButtonElement> = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddrHardHatNode,
      signer
    );
    await contract.castVote(proposalId, false).then((tx) => console.log(tx));
  };
  return (
    <div className="min-w-[80%] mt-8 mx-auto h-[280px] flex flex-col items-center justify-center space-y-6 border-4 border-gray-800 rounded-2xl bg-gray-600 shadow-2xl">
      <div>{description}</div>
      <div className="mx-auto min-w-[55%] space-x-8 flex flex-row jsutify-center items-center">
        <span className="rounded-2xl text-3xl w-[100px] h-[100px] border-2 border-blue-800 text-center bg-gray-500 hover:bg-gray-600 mx-auto">
          {forVoters}
        </span>
        <span className="rounded-2xl text-3xl w-[100px] h-[100px] border-2 border-blue-800 text-center bg-gray-500 hover:bg-gray-600 mx-auto">
          {againstVoters}
        </span>
      </div>
      <div className="mx-auto min-w-[42%] space-y-4 flex flex-col items-center justify-center">
        <h1 className="text-xl">Click to vote</h1>
        <div className="w-full space-x-6">
          <button
            className="h-16 w-40 bg-blue-700 rounded-lg"
            onClick={handleForVote}
          >
            FOR
          </button>
          <button
            className="h-16 w-40 bg-red-700 rounded-lg"
            onClick={handleAgainstVote}
          >
            AGAINST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
