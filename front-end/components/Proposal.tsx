import { ethers } from "ethers";
import React from "react";

export interface ProposalProps {
  proposalId: ethers.BigNumber;
  description: string;
  forVoters: string;
  againstVoters: string;
}

const Proposal = ({ description, forVoters, againstVoters }: ProposalProps) => {
  return (
    <div className="min-w-[70%] mt-8 mx-auto h-[240px] flex flex-col space-y-6 border-4 border-gray-700 rounded-lg">
      <div>{description}</div>
      <div>
        <span>{forVoters}</span>
        <span>{againstVoters}</span>
      </div>
    </div>
  );
};

export default Proposal;
