import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Marvel } from "next/font/google";
import Topbar from "@/components/Topbar";

const text = Marvel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={text.className}>
      <Topbar />
      <Component {...pageProps} />
    </div>
  );
}
