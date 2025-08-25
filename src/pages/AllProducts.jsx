import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const products = {
    nike: [
      {
        id: 1,
        name: "Nike Air Max Plus Men's Shoes (Black)",
        price: "1.999.000",
        image: "/images/Nike Air Max Plus Men's Shoes (Black).jpg",
      },
      {
        id: 2,
        name: "Nike Zoom Vomero 5 Phantom 43",
        price: "2.199.000",
        image: "/images/Nike Zoom Vomero 5 Phantom 43.jpg",
      },
      {
        id: 3,
        name: "Nike Revolution 6 Men's Road Running Shoes",
        price: "899.000",
        image: "/images/Nike Revolution 6 Men's Road Running Shoes.jpg",
      },
      // ...existing nike products...
    ],
    adidas: [
      {
        id: 1,
        name: "Adidas Ultraboost",
        price: "2.899.000",
        image:
          "/images/Adidas Ultraboost Running Shoes_ Classic Style Meets Modern Comfort for Everyday Wear.jpg",
      },
      {
        id: 2,
        name: "Adidas Superstar",
        price: "1.499.000",
        image: "/images/adidas Footwear, Apparel, and Accessories.jpg",
      },
      {
        id: 3,
        name: "Adidas Stan Smith",
        price: "1.699.000",
        image: "/images/ADIDAS STAN SMITH _ BrownsShoes.jpg",
      },
    ],
    puma: [
      {
        id: 1,
        name: "Puma RS-X",
        price: "1.799.000",
        image: "/images/Puma RS-X Black White - UK 6.jpg",
      },
      {
        id: 2,
        name: "Puma Suede",
        price: "1.299.000",
        image:
          "https://i.pinimg.com/1200x/46/f9/c1/46f9c11d4e4e4a7eebe7255f1a91ba5f.jpg",
      },
      {
        id: 3,
        name: "Puma Future Rider",
        price: "1.599.000",
        image:
          "https://i.pinimg.com/1200x/73/ef/01/73ef0159ed96c4b41f18568b9d60435f.jpg",
      },
    ],
    vans: [
      {
        id: 1,
        name: "Vans Old Skool",
        price: "999.000",
        image:
          "https://i.pinimg.com/736x/6b/ca/67/6bca67a6f5150d9dc29f6a6cc7c579e3.jpg",
      },
      {
        id: 2,
        name: "Vans Authentic",
        price: "899.000",
        image:
          "https://i.pinimg.com/1200x/6f/48/d0/6f48d0112681206c13c0ac50e8e65ac1.jpg",
      },
      {
        id: 3,
        name: "Vans Sk8-Hi",
        price: "1.299.000",
        image:
          "https://i.pinimg.com/1200x/7a/80/8d/7a808da40e15575b8042aabeb1ab3c75.jpg",
      },
    ],
    converse: [
      {
        id: 1,
        name: "Converse Chuck 70",
        price: "1.199.000",
        image:
          "https://i.pinimg.com/736x/71/f0/db/71f0db5e25de58caabbaae9c72809bda.jpg",
      },
      {
        id: 2,
        name: "Converse All Star",
        price: "899.000",
        image:
          "https://i.pinimg.com/1200x/ad/12/6b/ad126bf9f0b4b67c654d77482c20b50f.jpg",
      },
      {
        id: 3,
        name: "Converse One Star",
        price: "1.099.000",
        image:
          "https://i.pinimg.com/736x/bc/67/59/bc675993e0e37b4211d871629ee05f97.jpg",
      },
    ],
  };

  const allProducts = Object.values(products).flat();

  const filterProducts = (tab) => {
    if (tab === "all") return allProducts;
    return products[tab] || [];
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ⬅ Kembali
        </button>
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">
          Semua Koleksi
        </h1>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "all"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700 hover:bg-emerald-50"
            } transition`}
          >
            Semua
          </button>
          {Object.keys(products).map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveTab(brand)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === brand
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50"
              } transition`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProducts(activeTab).map((product) => (
            <div
              key={`${product.name}-${product.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">Rp {product.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate("/payment")}
                    className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                  >
                    Beli Sekarang
                  </button>

                  <button
                    onClick={() =>
                      alert("🛠️ Fitur keranjang sedang dalam masa pengembangan")
                    }
                    className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
                  >
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
