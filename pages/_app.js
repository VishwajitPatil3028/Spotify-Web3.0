import "../styles/globals.css";
import dynamic from "next/dynamic";
require("@solana/wallet-adapter-react-ui/styles.css");
import { SpotifyProvider } from "../context/context";

// changes
import { RPC_ENDPOINT } from "../utils/const";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

const WalletConnectionProvider = dynamic(
  () => import("../context/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <SpotifyProvider>
        <Component {...pageProps} />
      </SpotifyProvider>
    </WalletConnectionProvider>
  );
}

export default MyApp;
