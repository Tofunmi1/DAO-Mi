import React from "react";

export interface ProposalProps {
  description: string;
  forVoters: string;
  againstVoters: string;
}

const Proposal = ({ description, forVoters, againstVoters }: ProposalProps) => {
  return (
    <div className="min-w-[70%] mx-auto h-[240px] flex flex-col space-y-6 border-4 border-gray-700">
      <div>{description}</div>
      <div>
        <span>{forVoters}</span>
        <span>{againstVoters}</span>
      </div>
    </div>
  );
};

export default Proposal;
