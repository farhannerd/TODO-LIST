import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: "#0C356A" }} className="text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">
            <div className="logo font-bold text-2xl">
              <span style={{ color: "#40F8FF" }}>&lt;</span>
              Todo
              <span style={{ color: "#40F8FF" }}>List/&gt;</span>
            </div>
          </a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/courses" className="hover:underline">
            Courses
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* For small screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <a href="/" className="px-4 py-2 hover:bg-blue-700">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-blue-700">
            About
          </a>
          <a href="/courses" className="block px-4 py-2 hover:bg-blue-700">
            Courses
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
