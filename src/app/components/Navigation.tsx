"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
        <li><Link href="/products" className="text-blue-600 hover:underline">Products</Link></li>
        <li><Link href="/nfts" className="text-blue-600 hover:underline">NFT Management</Link></li>
        {session ? (
          <>
            <li><Link href="/account" className="text-blue-600 hover:underline">{session.user?.name}</Link></li>
            <li><button onClick={() => signOut()} className="text-red-600 hover:underline">Logout</button></li>
          </>
        ) : (
          <li><Link href="/login" className="text-blue-600 hover:underline">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
