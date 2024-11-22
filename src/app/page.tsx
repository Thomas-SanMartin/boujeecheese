export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Our E-commerce NFT Platform</h1>
        <p className="mt-4 text-lg">Discover exclusive products and innovative NFT experiences.</p>
        <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-200">
          Explore Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="mt-12 p-8">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        <p className="text-center text-gray-600 mt-2">Check out our latest collection.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-md p-4">
            <img src="/blackhoodie.jpg" alt="Hoodie A" className="w-full h-48 object-cover rounded-t-md" />
            <h3 className="text-xl font-semibold mt-4">Hoodie A</h3>
            <p className="text-gray-600">$50</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <img src="/creamhoodie.jpg" alt="Hoodie B" className="w-full h-48 object-cover rounded-t-md" />
            <h3 className="text-xl font-semibold mt-4">Hoodie B</h3>
            <p className="text-gray-600">$60</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="/products" className="text-blue-600 hover:underline font-semibold">
            See All Products
          </a>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="mt-12 p-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">NFT Management</h2>
        <p className="text-center text-gray-600 mt-2">Discover the power of NFTs.</p>
        <div className="text-center mt-8">
          <a
            href="/nfts"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Explore NFTs
          </a>
        </div>
      </section>
    </div>
  );
}
