import { Inter } from "next/font/google";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Main(props: any) {
  // マウント処理
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    
    // アンマウント処理
    return () => {
      document.body.style.backgroundColor = "";      
    }
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline page={props.page}>
        <code className="font-mono font-bold">pages/{props.page}.tsx</code>
      </Headline>

      <Links />
    </main>
  );
}
