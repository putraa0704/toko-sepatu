function Search() {
  return (
    <section id="search" className="py-20 bg-neutral-50 text-center">
      <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
        Cari Koleksi
      </h2>
      <input
        type="text"
        placeholder="Cari sepatu favoritmu..."
        className="border px-6 py-3 w-2/3 md:w-1/2 rounded-full shadow focus:ring-2 focus:ring-emerald-600 outline-none"
      />
    </section>
  );
}

export default Search;
