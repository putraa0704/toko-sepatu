export default function Brand() {
  const brands = [
    {
      name: "Nike",
      image: "/images/nike.jpg",
      bgColor: "bg-black",
    },
    {
      name: "Adidas",
      image: "/images/adidas.jpg",
      bgColor: "bg-black",
    },
    {
      name: "Puma",
      image: "/images/puma.jpg",
      bgColor: "bg-black",
    },
    {
      name: "Vans",
      image: "/images/vans.jpg",
      bgColor: "bg-black",
    },
    {
      name: "Converse",
      image: "/images/converse.jpg",
      bgColor: "bg-black",
    },
  ];

  return (
    <section id="brand" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
        Brand Pilihan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`flex items-center justify-center p-4 rounded-lg shadow-lg ${brand.bgColor}`}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
