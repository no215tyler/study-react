import Link from "next/link";
export function Header() {
  return (
    <div className="flex justify-center border-b-slate-700 border-b p-3">
      <header className="mt-20">
        <Link href="/" className="mx-2 my-1 rounded-md bg-blue-950 p-2 text-lg font-bold">
          Index
        </Link>
        <Link href="/about" className="mx-2 my-1 rounded-md bg-blue-950 p-2 text-lg font-bold">
          About
        </Link>
      </header>
    </div>
  );
}
