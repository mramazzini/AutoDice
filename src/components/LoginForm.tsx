"use client";
import login from "@/app/actions/login";
import { useState } from "react";
export default function LoginForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
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
      const res = await login(formState);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Username</label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
