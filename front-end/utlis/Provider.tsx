import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { log } from "./console";
import dynamic from "next/dynamic";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

interface ProviderOptions {
  provider: ethers.providers.Web3Provider | undefined;
}

export const ProviderContext = React.createContext<ProviderOptions>({
  provider: undefined,
});

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>(
    window.ethereum
  );

  const getBlockChain = useCallback(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      log("hi mom");
    }
    if (!window.ethereum) log("window.ethereum not enabled");
  }, []);

  useEffect(() => {
    document.addEventListener("load", getBlockChain);

    return () => document.removeEventListener("load", getBlockChain);
  }, [getBlockChain]);

  return (
    <ProviderContext.Provider value={{ provider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default dynamic(() => Promise.resolve(Provider), {
  ssr: false,
});
