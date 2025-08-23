import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md px-6 md:px-12 py-5 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
          Andra's Shoes
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-10 font-sans text-gray-700">
          <li>
            <a
              href="#home"
              className="hover:text-emerald-600 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#brand"
              className="hover:text-emerald-600 transition-colors relative group"
            >
              Brand
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#search"
              className="hover:text-emerald-600 transition-colors relative group"
            >
              Search
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden shadow-lg">
            <ul className="py-4 px-6 space-y-4">
              <li>
                <a href="#home" className="block hover:text-emerald-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#brand" className="block hover:text-emerald-600">
                  Brand
                </a>
              </li>
              <li>
                <a href="#search" className="block hover:text-emerald-600">
                  Search
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
