import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();
  return <Component {...pageProps} {...counter} {...inputArray} />;
}
