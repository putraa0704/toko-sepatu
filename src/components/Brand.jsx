export default function Brand() {
  const brands = ["Nike", "Adidas", "Puma", "Vans", "Converse"];

  return (
    <section id="brand" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">
        Brand Pilihan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-10">
        {brands.map((b) => (
          <div
            key={b}
            className="bg-neutral-50 py-6 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer font-sans text-lg font-medium"
          >
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
