import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
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
      </ul>
    </nav>
  );
}
