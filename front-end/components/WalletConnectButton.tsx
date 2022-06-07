import React, { MouseEventHandler } from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import IdentIcon from "./IdentIcon";
import { utils } from "ethers";

interface Props {
  handleWalletConnect?: MouseEventHandler<HTMLButtonElement>;
}

const WalletConnectButton = ({}: Props) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleWalletConnect = () => {
    activateBrowserWallet();
  };
  return account ? (
    <div className="flex items-center bg-blue-600 rounded-xl py-0 justify-center ">
      <div className="px-3 text-white text-center text-xl">
        {etherBalance && parseFloat(utils.formatEther(etherBalance)).toFixed(3)}{" "}
        ETH
      </div>
      <button className="bg-blue-800 border-[1px] border-transparent hover:border-[1px] hover:border-solid hover:border-blue-700 hover:bg-blue-700 rounded-xl m-[1px] px-3 h-[38px] flex flex-row">
        <div className="text-white text-xl mr-2 text-center ">
          {account &&
            `${account.slice(0, 6)}....${account.slice(
              account.length - 4,
              account.length
            )}}`}
        </div>
        <IdentIcon />
      </button>
    </div>
  ) : (
    <div>
      <button
        onClick={handleWalletConnect}
        className="text-lg rounded-2xl w-52 h-12 bg-blue-700"
      >
        Connect to a wallet
      </button>
    </div>
  );
};

export default WalletConnectButton;
