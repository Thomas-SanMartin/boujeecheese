import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "boujeecheese - Products",
  description: "boujeecheese products",
};

// Updated products array with your image filenames
const products = [
  { id: 1, name: "Black Hoodie", price: "$50", image: "/blackhoodie.jpg" },
  { id: 2, name: "Cream Hoodie", price: "$60", image: "/creamhoodie.jpg" },
  { id: 3, name: "Bitcoin Chain", price: "$100", image: "/bitcoinchain.jpg" },
  { id: 4, name: "Cheese Chain", price: "$120", image: "/cheesechain1.avif" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
