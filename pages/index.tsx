import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[count, setCount] = useState<number>(1)

  const handleClick = (e: any) => {
    setCount((count: number) => count + 1);
    setCount((count: number) => count + 1);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center font-bold p-3 px-4 mt-1 bg-blue-900 rounded-full">{count}</h1>
        <button onClick={handleClick} className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold">
          カウント
        </button>
      </div>
      <Main page="index" />
    </>
  );
}
