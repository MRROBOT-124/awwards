
import type { AppProps } from "next/app";
import { withUrqlClient } from "next-urql";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const urlConfig = withUrqlClient(() => ({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
        credentials: "include"
    }
  }));

urlConfig(App);
