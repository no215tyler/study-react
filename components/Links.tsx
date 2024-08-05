import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Links = (props: any) => {
  return (
    <div className="mb-32 grid place-conte text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <button onClick={props.handleReduce} className="z-10 p-2 m-1 w-28 mx-auto bg-blue-950 shadow-lg shadow-slate-500 rounded-md font-bold">減らす</button>
      {props.items.map((item: {href: string; title: string; description: string;}) => {
        return (
          <a
            key={item.href}
            href={item.href} 
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
}
