import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const About = (props: any) => {
  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        {props.isShow ? <h1 className="text-center font-bold p-3 px-4 mt-1 bg-blue-900 rounded-full">{props.doubleCount}</h1> : null}
        <button
         onClick={props.handleClick} 
         className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold"
        >
          カウント
        </button>
        <button className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold"
         onClick={props.handleDisplay}
        >
          {props.isShow ? '非表示' : '表示'}
        </button>
        <input 
          type="text" 
          value={props.text} 
          className="text-black"
          onChange={props.handleChange}
        />
        <button onClick={props.handleAdd} className="p-2 m-1 bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold">
          追加
        </button>
        <ul>
          {props.array.map((item: string) => {
            return <li key="{item}">{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" />
    </>
  );
}

export default About;
