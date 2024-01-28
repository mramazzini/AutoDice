import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="mb-10 h-16">
      <div className="fixed flex h-16 w-full items-center justify-between bg-black/40 px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">AutoDice</h1>
          <div className="ml-5 flex items-center justify-between">
            |
            <Link
              href="/login"
              className="cursor-pointer px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:underline"
            >
              Login
            </Link>
            |
            <Link
              href="/signup"
              className="cursor-pointer px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:underline"
            >
              Signup
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="cursor-pointer px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:underline"
          >
            Dashboard
          </Link>
          |
          <Link
            href="/about"
            className="cursor-pointer px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:underline"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
