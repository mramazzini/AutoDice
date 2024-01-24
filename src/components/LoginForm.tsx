"use client";
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
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      const data = await res.json();
      setError(data.message);
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
