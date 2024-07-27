import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo: string = 'test';
  const handleClick = useCallback((e: any) => {
    console.log(`URL: ${e.target.href}`);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <a href="/about" onClick={handleClick}>
          ボタン
        </a>
      </div>
      <Main page="index" />
    </>
  );
}
