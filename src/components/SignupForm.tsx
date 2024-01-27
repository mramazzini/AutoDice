"use client";
import signup from "@/actions/signup";

import { useState } from "react";
export default function SignupForm() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const token = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }).then((res) => res.json());

      document.location.href = `/dashboard`;
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <form
      className="p-5 justify-center items-start flex flex-col w-1/3"
      onSubmit={handleSubmit}
    >
      <div className="pb-5">
        <label className="text-3xl font-bold px-2" htmlFor="username">
          Username
        </label>
        <input
          className="text-3xl font-bold px-2 bg-black/40 hover:bg-black/10 transition-all duration-300 ease-in-out cursor-pointer rounded-md justify-center items-center w-full h-16 mt-5"
          id="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
        />
      </div>
      <div className="pb-5">
        <label className="text-3xl font-bold px-2" htmlFor="email">
          Email
        </label>
        <input
          className="text-3xl font-bold px-2 bg-black/40 hover:bg-black/10 transition-all duration-300 ease-in-out cursor-pointer rounded-md justify-center items-center w-full h-16 mt-5"
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="pb-5">
        <label className="text-3xl font-bold px-2" htmlFor="password">
          Password
        </label>
        <input
          className="text-3xl font-bold px-2 bg-black/40 hover:bg-black/10 transition-all duration-300 ease-in-out cursor-pointer rounded-md justify-center items-center w-full h-16 mt-5"
          id="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="text-3xl font-bold px-12 bg-black/50 hover:bg-black/70 transition-all duration-300 ease-in-out cursor-pointer rounded-md justify-center items-center h-16 mt-5"
        type="submit"
      >
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
