export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-8 py-5 shadow-sm sticky top-0 z-50">
      <h1 className="text-3xl font-serif font-bold text-emerald-700 tracking-wide">
        LaShoes
      </h1>

      <ul className="flex space-x-8 font-sans text-gray-700">
        <li><a href="#home" className="hover:text-emerald-600">Home</a></li>
        <li><a href="#brand" className="hover:text-emerald-600">Brand</a></li>
        <li><a href="#search" className="hover:text-emerald-600">Search</a></li>
      </ul>

      <div className="space-x-4">
        <button className="px-5 py-2 border rounded-full hover:bg-emerald-50 transition">
          Sign In
        </button>
        <button className="px-5 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
