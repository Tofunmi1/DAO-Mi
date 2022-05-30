import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState, Fragment, FormEvent, useCallback } from "react";
import Web3Modal from "web3modal";
import { Contract, ethers, utils } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Dialog, Transition } from "@headlessui/react";
import ProposalForm, { formPropsArr } from "../components/ProposalForm";
import { DAOMIGovernance__factory } from "../typechain-types/Governance-types/ethers-contracts";
import { GovernanceERC20__factory } from "../typechain-types/Token-types/ethers-contracts";
import Proposal, { ProposalProps } from "../components/Proposal";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { ProposalCreatedEvent } from "../typechain-types/Governance-types/ethers-contracts/DAOMIGovernance";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

type ProposalCreatedEv = ProposalCreatedEvent[];
type ProposalPropsArr = ProposalProps[];

const Home: NextPage = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<formPropsArr>([
    { targets: [], values: [], description: "", calldatas: [] },
  ]);
  const [error, setError] = useState("");
  const [events, setEvents] = useState<ProposalCreatedEv>([]);
  const [proposals, setProposals] = useState<ProposalPropsArr>([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    if (signer) {
      setIsOpen(true);
    } else {
      return null;
    }
  };

  const providerOptions = {
    /* See Provider Options Section */
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "INFURA_ID" /**TODO set up .env for infura*/,
      },
    },
  };

  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const handleWalletStatus = (provider: ethers.providers.Web3Provider) => {
    typeof provider == "object"
      ? setConnected(true)
      : typeof provider == undefined || null
      ? setConnected(false)
      : setConnected(true);
  };

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // handleWalletStatus(provider);
    }
  }, [handleWalletStatus]);

  let provider: ethers.providers.Web3Provider;

  const DAOGovernanceAddrRikenby: string =
    "0xe1dabe4ac634b82c94d047a9c88cf0f0b9f4e903";

  const DAOGovernanceAddrHardHatNode: string =
    "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

  const handleWalletConnect = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    // console.log(`provider:\n${provider}`);
    handleWalletStatus(provider);
  };

  const handleProposalSubmit = async () => {
    ethers.utils.isAddress(DAOGovernanceAddrRikenby);
    await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    handleWalletStatus(provider);
    console.log(await signer.getAddress());
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddrHardHatNode,
      signer
    );
    // console.lo
    const proposalIdTx = await contract.propose(
      ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],
      [0],
      "adding liquidity burn to uniswappv3 and some  interaction with compound",
      ["0x000b23"]
    );
    console.log(form[0]);
    // const proposalIdTx = await contract.propose(
    //   form[0].targets,
    //   [0],
    //   "adding liquidity and token burn to uniswap",
    //   ["0x000b"]
    // );

    // const proposalIdTx = await contract.propose(
    //   form[0].targets,
    //   form[0].values,
    //   form[0].description,
    //   form[0].calldatas
    // );

    const eventsFilter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(eventsFilter);
    for (const event of events) {
      console.log(
        `proposalId -> ${event.args.proposalId} start -> ${event.args.startBlock} end -> ${event.args.endBlock}`
      );
    }

    console.log(proposalIdTx);
  };

  const handleProposal = async (e: any) => {
    e.preventDefault();
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //my way of checking if the wallet is connected
      if (await signer.getAddress()) {
        handleProposalSubmit();
      } else {
        return null;
      }
    }
    e.target.reset();
  };

  const TestFrontEndFunc = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddrHardHatNode,
      signer
    );
    const eventsFilter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(eventsFilter);
    const length = events.length;
    const proposalId = events[length - 1].args.proposalId;
    await contract
      .castVote(proposalId, true)
      .then((transaction) => console.log(`\ncastVote \n${transaction}`))
      .catch((err) => console.error(err));

    // await contract
    //   .queue(
    //     ["0xeaa7f8249571f336278571f3a3f14a6b8296f40a"],
    //     [0],
    //     "adding liquidity burn to uniswapp",
    //     ["0x000b"]
    //   )
    //   .then((transaction) => console.log(`\nqueue \n${transaction}`));
    // await contract
    //   .execute(
    //     ["0xeaa7f8249571f336278571f3a3f14a6b8296f40a"],
    //     [0],
    //     "adding liquidity burn to uniswapp",
    //     ["0x000b"]
    //   )
    //   .then((transaction) => console.log(`\nexecute \n${transaction}`));
  };

  const getProposals = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddrHardHatNode,
      signer
    );
    const eventsFilter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(eventsFilter);
    const pros: ProposalProps[] = [];
    for (const event of events) {
      const getProposal = await contract.proposals(event.args.proposalId);
      const proposalObj: ProposalProps = {
        proposalId: event.args.proposalId,
        description: getProposal.description,
        forVoters: utils.formatUnits(getProposal.forVoters),
        againstVoters: utils.formatUnits(getProposal.againstVoters),
      };
      pros.push(proposalObj);
      setProposals(pros);
    }
  };

  useEffect(() => {
    getProposals();
  }, [proposals]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={TestFrontEndFunc}>Test</button>

      <header className="p-0 m-0 w-full h-16 backdrop-blur-sm bg-white flex flex-row overflow-hidden fixed">
        <div className="text-xl md:text-2xl lg:text-3xl p-4 ml-10 text-gray-700 font-extrabold">
          THE-DAOPro
        </div>
        {connected ? (
          <div className="text-white">connected</div>
        ) : (
          <button
            onClick={handleWalletConnect}
            className="h-12 font-bold my-auto w-60 text-xl border-2 border-gray-700 rounded-lg bg-white relative left-[-2%] md:left-[39%] lg:left-[48%] xl:left-[57%] sm:left-[30%] text-gray-700 flex flex-row justify-center items-center space-x-4"
          >
            <div className="text-blue-600">
              <Image
                src={`/icons8-wallet-64.svg`}
                alt={`connect-wallet-icon`}
                height={50}
                width={50}
                color={"blue"}
              />
            </div>
            connect wallet
          </button>
        )}
      </header>

      <div className="flex flex-row items-center justify-center absolute mt-16 h-20 w-full bg-gray-500">
        <span className="text-white text-center font-bold"></span>
      </div>

      <section className="mt-44 absolute w-full">
        <div className="mx-auto h-20 w-[90%] flex flex-row border-b-2 border-b-gray-700 relatve overflow-hidden">
          <div className="relative max-w-[40%] left-[2%] my-auto">
            <span>Proposals</span>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="md:left-[50%] lg:left-[65%] xl:left-[70%] rounded-md bg-gray-700 h-16 my-auto m-4 p-4 text-2xl font-medium text-white hover:bg-opacity-30 left-[25%] relative"
          >
            New Proposal
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Create a new proposal
                    </Dialog.Title>
                    <div className="mt-2">
                      <ProposalForm
                        handleModalClose={closeModal}
                        handleForm={handleProposal}
                        setForm={setForm}
                        form={form}
                      />
                    </div>

                    <div className="mt-4"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>

      <section>
        {proposals.map((proposal, index) => {
          return (
            <NextLink href={`/proposal/${proposal.proposalId}`} key={index}>
              <div className="w-full flex flex-col justify-center items-center mx-auto space-y-2">
                <Proposal
                  proposalId={proposal.proposalId}
                  description={proposal.description}
                  againstVoters={proposal.againstVoters}
                  forVoters={proposal.forVoters}
                />
              </div>
            </NextLink>
          );
        })}
      </section>

      <footer></footer>
    </div>
  );
};

export default Home;
