import "../styles/globals.css";
import type { AppProps } from "next/app";
import Provider from "../utlis/Provider";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <DAppProvider config={{}}>
        <Component {...pageProps} />
      </DAppProvider>
    </Provider>
  );
}

export default MyApp;
