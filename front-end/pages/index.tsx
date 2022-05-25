import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Dialog, Transition } from "@headlessui/react";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const Home: NextPage = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
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

  const handleWalletConnect = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    console.log(`provider:\n${provider}`);
    handleWalletStatus(provider);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main>
        <div className="mx-auto h-40 w-[90%] flex flex-row border-b-2 border-b-lime-700 relative">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black h-16 my-auto relative px-4 py-2 text-2xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            create Proposal
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
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Submit Proposal
                      </button>
                    </div>
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
