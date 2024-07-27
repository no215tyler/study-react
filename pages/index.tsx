import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[count, setCount] = useState<number>(1)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count: number) => count + 1);
    }
  }, [count]);

  // マウント処理
  useEffect(() => {
    console.log(`マウント時: ${count}`);
    document.body.style.backgroundColor = "lightblue";
    
    // アンマウント処理
    return () => {
      console.log(`アンマウント時: ${count}`);
      document.body.style.backgroundColor = "";      
    }
  }, [count]); // , [count, foo, bar, hoge] この変数の値に変更が生じた場合にuseEffectの処理が走る

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
