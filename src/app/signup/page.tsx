"use client";

import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Register user in backend
      const { data } = await axios.post('/api/auth/register', { name, email, password });

      // Automatically sign in after successful registration
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // Redirect to account page
      router.push("/account");
    } catch (error) {
      setError('Error registering user. Please try again.');
      console.error('Signup Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input type="password" id="password" className="w-full mt-2 p-2 border rounded"
              placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
