import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import logo from '../assets/logo.png' // importing company logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToService = (e) => {
    e.preventDefault();
    document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-[#0C0F12] text-white shadow-md">
      <div className="flex justify-between items-center h-16 px-6 md:px-10">
        {/* Logo */}
        <h2 className="font-extrabold text-2xl">
          <Link to="/"><span className="flex flex-row items-center gap-2"><img className="w-14 rounded-full" src={logo} /> SoftGear</span></Link>
        </h2>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/internship" className="hover:text-blue-400 transition-all border-b-2 pb-2 border-yellow-300 animate-blink">
            Apply Internship
          </Link>
          <Link to="/" className="hover:text-blue-400 transition-all">Home</Link>
          <a href="#service" onClick={handleScrollToService} className="hover:text-blue-400 transition-all">
            Services
          </a>
          <Link to="/about" className="hover:text-blue-400 transition-all">About us</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition-all">Portfolio</Link>
          <Link to="/careers" className="hover:text-blue-400 transition-all">Careers</Link>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 py-4 bg-[#0C0F12] text-center">
          <Link to="/internship" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>
            Apply Internship
          </Link>
          <Link to="/" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <a href="#service" onClick={handleScrollToService} className="hover:text-blue-400 transition-all">
            Services
          </a>
          <Link to="/about" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
          <Link to="/careers" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
