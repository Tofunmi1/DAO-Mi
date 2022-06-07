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
import WalletConnectButton from "../components/WalletConnectButton";
import Link from "next/link";

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
      [2],
      "burning some liquidity",
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
    }
    setProposals(pros);
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
      <header className="p-0 m-0 w-full h-16 backdrop-blur-lg flex flex-row overflow-hidden fixed bg-gray-400">
        <div className="text-xl md:text-2xl lg:text-3xl p-4 ml-10 text-white font-extrabold">
          Exclusive-DAO
        </div>
        {/* {connected ? (
          <div className="text-white">connected</div>
        ) : ( */}
        <div className="cursor-pointer mr-6">
          <a href="github.com/Tofunmi1/DAO-MI">
            <Image
              src="/icons8-github-64.svg"
              height={50}
              width={50}
              alt="github-icon"
            />
          </a>
        </div>
        <div
          onClick={handleWalletConnect}
          className="my-auto relative left-[-2%] md:left-[39%] lg:left-[48%] xl:left-[57%] sm:left-[30%] flex flex-row justify-center items-center space-x-4"
        >
          <WalletConnectButton handleWalletConnect={handleWalletConnect} />
        </div>
        {/* )} */}
      </header>

      {/* <div className="flex flex-row items-center justify-center absolute mt-16 h-20 w-full bg-gray-500">
        <span className="text-white text-center font-bold"></span>
      </div> */}

      <section className="mt-44 absolute w-full overflow-hidden">
        <div className="mx-auto w-[90%] flex lg:flex-row md:flex-row flex-col border-b-2 border-b-gray-700 relatve overflow-hidden">
          <div className="min-w-[50%] lg:max-w-[50%] md:max-w-[50%] left-[2%] my-auto">
            <span className="flex flex-col space-y-4">
              <div className="text-2xl text-center">Proposals Section</div>
              <span className="text-xl text-center">
                Showing the latest past proposals below. You create a new
                proposal, fill in the proposal details, and any wallet with the
                DAT token on Ropsten can vote on a proposal
              </span>
              <blockquote className="flex flex-col items-center justify-center">
                Ropsten Token $DAT adress for this DAO is
                <Link href={``}>
                  <h1>0x63030e8e3bfaf514b65508d9e5e067716b30b686</h1>
                </Link>
              </blockquote>
            </span>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-gray-600 h-12 w-40 my-auto p-4 hover:bg-opacity-30 mx-auto md:left-[5%] relative text-center border-[1px] border-transparent flex items-center justify-center"
          >
            <h1 className="text-xl font-medium text-white text-center">
              New Proposal
            </h1>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
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

      <section className="absolute mt-96 w-full">
        <div className="relative text-xl mx-auto max-w-[70%] mt-8 top-20 lg:top-3">
          The essence of this DAO is to create Proposals(target contract
          address, function calls to execute on the target contract, the
          transaction calldatas and more). once a quorum has reached, anyone can
          execute the goal of the proposal. The execute button was removed by me
          cause I felt it was unnessary, just the proposals and voting processes
          are implemented on the front-end. voting time minimum is 2 minutes,
          expiration is 7 minutes, but can be increased to days or hours in the
          solidity code.
        </div>
        <div className="text-2xl mx-auto w-full text-center mt-4 text-blue-700">
          Past Proposals
        </div>
        {proposals.map((proposal, index) => {
          return proposals.length == 0 ? (
            <div>connect wallet to see past proposals</div>
          ) : (
            // <NextLink href={`/proposal/${proposal.proposalId}`} key={index}>
            <div className="w-full flex flex-col justify-center items-center mx-auto space-y-6">
              <Proposal
                key={index}
                proposalId={proposal.proposalId}
                description={proposal.description}
                againstVoters={proposal.againstVoters}
                forVoters={proposal.forVoters}
              />
            </div>
            // </NextLink>
          );
        })}
      </section>

      <footer>hellow footer</footer>
    </div>
  );
};

export default Home;
