"use client";

export default function AccountPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-md shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Your Account</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Wallet Address</label>
            <p className="text-gray-600">0x123...789</p>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    );
  }
  