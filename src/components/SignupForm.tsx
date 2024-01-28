'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import signup from '@/lib/actions/signup.actions';

export default function SignupForm() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    signup(formState);
  };

  return (
    <form
      className="flex w-1/3 flex-col items-start justify-center p-5"
      onSubmit={handleSubmit}
    >
      <div className="pb-5">
        <label className="px-2 text-3xl font-bold" htmlFor="username">
          Username
        </label>
        <input
          className="mt-5 h-16 w-full cursor-pointer items-center justify-center rounded-md bg-black/40 px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-black/10"
          id="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
        />
      </div>
      <div className="pb-5">
        <label className="px-2 text-3xl font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="mt-5 h-16 w-full cursor-pointer items-center justify-center rounded-md bg-black/40 px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-black/10"
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="pb-5">
        <label className="px-2 text-3xl font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="mt-5 h-16 w-full cursor-pointer items-center justify-center rounded-md bg-black/40 px-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-black/10"
          id="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="mt-5 h-16 cursor-pointer items-center justify-center rounded-md bg-black/50 px-12 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-black/70"
        type="submit"
      >
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
