import Link from "next/link";

const NAV_ITEMS = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
]

export const Header = () => {
  return (
    <div className="flex justify-center border-b-slate-700 border-b p-3">
      <header className="mt-20">
        {NAV_ITEMS.map((obj) => {
          return (
            <Link key={obj.href} href={obj.href} className="mx-2 my-1 rounded-md bg-blue-950 p-2 text-lg font-bold">
              {obj.label}
            </Link>
          )
        })}
      </header>
    </div>
  );
}
