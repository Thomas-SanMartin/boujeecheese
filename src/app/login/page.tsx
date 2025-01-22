"use client";

import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password.');
    } else {
      router.push("/account");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input type="password" id="password" className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
