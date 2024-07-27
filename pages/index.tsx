import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[count, setCount] = useState<number>(1);
  const[text, setText] = useState<string>('');
  const[isShow, setIsShow] = useState<boolean>(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count: number) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e: any): void => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback((): void => {
    setIsShow((isShow: boolean): boolean => !isShow);
  }, [isShow]);

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
        {isShow ? <h1 className="text-center font-bold p-3 px-4 mt-1 bg-blue-900 rounded-full">{count}</h1> : null}
        <button
         onClick={handleClick} 
         className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold"
        >
          カウント
        </button>
        <button className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold"
         onClick={handleDisplay}
        >
          {isShow ? '非表示' : '表示'}
        </button>
        <input 
          type="text" 
          value={text} 
          className="text-black"
          onChange={handleChange}
        />
      </div>
      <Main page="index" />
    </>
  );
}
