import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "boujeecheese - NFT's",
    description: "boujeecheese NFT's",
};



export default function NFTManagementPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">NFT Management</h1>
      
      {/* User's NFT Collection */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mock NFT Cards */}
          <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
            <img
              src="/cheeseswag.jpeg"
              alt="NFT Placeholder"
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">NFT #1</h3>
              <p className="text-gray-600">Description of NFT #1</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
          {/* Add more NFT cards as needed */}
        </div>
      </section>

      {/* Actions Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Actions</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
            Mint NFT
          </button>
          <button className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 transition">
            Transfer NFT
          </button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600 transition">
            View NFT Metadata
          </button>
        </div>
      </section>
    </div>
  );
}

  