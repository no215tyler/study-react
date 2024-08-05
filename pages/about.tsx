import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

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
        <button onClick={handleAdd} className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold">
          追加
        </button>
        <ul>
          {array.map((item) => {
            return <li key="{item}">{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" />
    </>
  );
}
