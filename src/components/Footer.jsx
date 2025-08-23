function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-12">
      <h2 className="text-2xl font-serif font-bold mb-4">Lokasi Kami</h2>
      <p className="mb-6 text-gray-300">Jl. Pitara, Rangkapan Jaya, Boing 32, Depok</p>

      <form className="flex justify-center space-x-3">  
        <input
          type="text"
          placeholder="Masukkan lokasi Anda"
          className="px-5 py-3 rounded-full w-1/2 md:w-1/3 text-gray-900 shadow"
        />
        <button className="px-6 py-3 bg-emerald-700 rounded-full hover:bg-emerald-800 transition">
          Cari
        </button>
      </form>

      <p className="mt-10 text-sm text-gray-400">
        © 2025 Andra's Shoes. Elegance meets Modern Style.
      </p>
    </footer>
  );
}

export default Footer;