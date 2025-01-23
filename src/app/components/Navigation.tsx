"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession(); // Check if user is logged in

  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {!session ? (
          <>
            <li>
              <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
            </li>
            <li>
              <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li className="font-bold">Welcome, {session.user?.name}!</li>
            <li>
              <Link href="/account" className="text-blue-600 hover:underline">Account</Link>
            </li>
            <li>
              <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
            </li>
            <li>
              <Link href="/nfts" className="text-blue-600 hover:underline">NFT Management</Link>
            </li>
            <li>
              <Link href="/admin" className="text-blue-600 hover:underline">Admin Dashboard</Link>
            </li>
            <li>
              <button className="text-red-600 hover:underline" onClick={() => signOut()}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
