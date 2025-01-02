"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border rounded"
              placeholder="Create a password"
            />
          </div>
          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        {/* Wallet Signup */}
        <div className="mt-6">
          <p className="text-center text-gray-600">or</p>
          <button
            className="w-full mt-4 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            onClick={() => console.log("Connect Wallet")}
          >
            Sign Up with Wallet
          </button>
        </div>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
