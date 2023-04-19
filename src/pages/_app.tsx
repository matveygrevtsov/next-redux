import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { Nav } from "@/components/Nav/Nav";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
