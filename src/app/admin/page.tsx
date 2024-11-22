import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "boujeecheese - Admin",
    description: "boujeecheese admin page",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>

      <div className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              Add Product
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              Remove Product
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">NFT Management</h2>
          <div className="flex gap-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
              Mint NFT
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
              Transfer NFT
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Platform Analytics</h2>
          <p>Coming soon: A detailed overview of user activity and sales.</p>
        </section>
      </div>
    </div>
  );
}
