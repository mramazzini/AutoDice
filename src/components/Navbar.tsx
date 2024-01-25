"use client";

export default function Navbar() {
  return (
    <nav className="h-16 mb-10">
      <div className="flex justify-between items-center w-full h-16 px-5 fixed bg-black/40">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">AutoDice</h1>
          <div className="flex justify-between items-center ml-5">
            |
            <a
              className="text-3xl font-bold px-2 hover:underline transition-all duration-300 ease-in-out cursor-pointer"
              href="/login"
            >
              Login
            </a>
            |
            <a
              className="text-3xl font-bold px-2 hover:underline transition-all duration-300 ease-in-out cursor-pointer"
              href="/signup"
            >
              Signup
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            className="text-3xl font-bold px-2 hover:underline transition-all duration-300 ease-in-out cursor-pointer"
            href="/dashboard"
          >
            Dashboard
          </a>
          |
          <a
            className="text-3xl font-bold px-2 hover:underline transition-all duration-300 ease-in-out cursor-pointer"
            href="/about"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
