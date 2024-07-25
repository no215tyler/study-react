import { Inter } from "next/font/google";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <Headline
      title="pages/about.tsx" 
      number={1234}
      array={[1, 2, 3]}
      obj={{ hoge: "hoge", fuga: "fuga" }}
      boolean // => true
      code={<code className="font-mono font-bold">pages/about.tsx</code>}
      onClick={() => alert('About Page')}
    />

      <Links />
    </main>
  );
}
