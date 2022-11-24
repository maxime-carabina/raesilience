import type { AppProps } from "next/app";

import "../src/styles/globals.scss";
import "../src/styles/components/MyHeader.scss";
import "../public/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
