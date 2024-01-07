import Nav from "@/components/layout/Nav";
import SearchProvider from "@/store/SearchContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Nav />
      <Component {...pageProps} />
    </SearchProvider>
  );
}
