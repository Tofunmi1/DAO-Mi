import React, { useCallback, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

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
  provider: window.ethereum,
});

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  const getBlockChain = useCallback(() => {
    if (window.ethereum) {
      setProvider(window.ethereum);
    }
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
