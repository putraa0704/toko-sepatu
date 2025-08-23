import { useNavigate } from "react-router-dom";

function Brand() {
  const navigate = useNavigate();
  const brands = [
    {
      name: "Nike",
      image: "/images/nike.jpg",
    },
    {
      name: "Adidas",
      image: "/images/adidas.jpg",
    },
    {
      name: "Puma",
      image: "/images/puma.jpg",
    },
    {
      name: "Vans",
      image: "/images/vans.jpg",
    },
    {
      name: "Converse",
      image: "/images/converse.jpg",
    },
  ];

  return (
    <section id="brand" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
        Brand Pilihan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => navigate(`/pembelian/${brand.name.toLowerCase()}`)}
            className="flex items-center justify-center p-4 rounded-2xl shadow-lg bg-black w-full h-full transition hover:scale-105"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 md:h-20 object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Brand;
