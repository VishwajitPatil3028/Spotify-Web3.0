// import React from 'react'
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useEffect, useMemo, useState } from "react";
import { SOLANA_HOST } from "../utils/const";
import { RPC_ENDPOINT } from "../utils/const";

// change
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletConnectionProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // const endpoint = useMemo(() => RPC_ENDPOINT, []);
  const endpoint = useMemo(() => RPC_ENDPOINT, []);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ commitment: "confirmed" }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {mounted && children}
          {/* {children} */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
