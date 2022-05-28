import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, Fragment, FormEvent } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Dialog, Transition } from "@headlessui/react";
import ProposalForm, { formPropsArr } from "../components/ProposalForm";
import { DAOMIGovernance__factory } from "../typechain-types/Governance-types/ethers-contracts";
import { GovernanceERC20__factory } from "../typechain-types/Token-types/ethers-contracts";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const Home: NextPage = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<formPropsArr>([
    { targets: [], values: [], description: "", calldatas: [] },
  ]);

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
      package: WalletConnectProvider, // required
      options: {
        infuraId: "INFURA_ID", // required
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
    }
  }, [handleWalletStatus]);

  let provider: ethers.providers.Web3Provider;

  const DAOGovernanceAddr: string =
    "0xe1dabe4ac634b82c94d047a9c88cf0f0b9f4e903";

  const handleWalletConnect = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    // console.log(`provider:\n${provider}`);
    handleWalletStatus(provider);
  };

  const handleProposalSubmit = async () => {
    ethers.utils.isAddress(DAOGovernanceAddr);
    await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    handleWalletStatus(provider);
    console.log(await signer.getAddress());
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddr,
      signer
    );
    // console.lo
    const proposalIdTx = await contract.propose(
      ["0xeaa7f8249571f336278571f3a3f14a6b8296f40a"],
      [0],
      "adding liquidity and token burn to uniswap",
      ["0x000b"]
    );
    // const proposalId = await contract.propose(
    // form[0].targets,
    // form[0].values,
    // form[0].description,
    // form[0].calldatas
    // );
    const eventsFilter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(eventsFilter);
    console.log(`\nproposal id one => \n${events[0].args.proposalId}`);
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

  const castVote = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = DAOMIGovernance__factory.connect(
      DAOGovernanceAddr,
      signer
    );
    const eventsFilter = contract.filters.ProposalCreated();
    const events = await contract.queryFilter(eventsFilter);
    const proposalId = events[1].args.proposalId;
    await contract
      .castVote(proposalId, true)
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={castVote}>Test</button>
      <header className="p-0 m-0 w-full h-16 backdrop-blur-sm bg-teal-500 flex flex-row overflow-hidden fixed">
        <div className="text-3xl p-4 ml-10 text-white font-extrabold">
          THE DAO
        </div>
        {connected ? (
          <div className="text-white">connected</div>
        ) : (
          <button
            onClick={handleWalletConnect}
            className="h-8 my-auto w-60 text-2xl rounded-xl  bg-green-300/40 relative left-[70%] text-white hover:bg-green-500"
          >
            connect wallet
          </button>
        )}
      </header>

      <main className="mt-16 absolute w-full">
        <div className="mx-auto h-20 w-[90%] flex flex-row border-b-2 border-b-lime-700 relatve">
          <div className="relative max-w-[40%] left-[2%] my-auto">
            <span>Proposals</span>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-green-300 h-16 my-auto m-4 p-4 text-2xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 left-[79%] relative"
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
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
