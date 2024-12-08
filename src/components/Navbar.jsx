import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1a2881] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-[80%]">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Navbar Links */}
        <div className="flex-grow hidden md:flex justify-center space-x-8 text-white">
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Luggage</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Backpack</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Totes & Handbags</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Briefcase</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Travel Accessories</div>
        </div>

        <div className="flex md:hidden items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        <div className="flex flex-col items-center space-y-2">
       
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">About us</div>

          <div className="flex space-x-2">
            <div className="relative">
              <FaSearch className="text-xl cursor-pointer text-gray-200" />
            </div>
            <div className="relative">
              <FaUser className="text-xl cursor-pointer text-gray-200" />
            </div>
            <div className="relative">
              <FaShoppingCart className="text-xl cursor-pointer text-gray-200" />
            </div>
          </div>
        </div>


      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#004080] text-white px-6 py-4 flex flex-col space-y-4">
          <div className="text-sm font-semibold cursor-pointer">Luggage</div>
          <div className="text-sm font-semibold cursor-pointer">Backpack</div>
          <div className="text-sm font-semibold cursor-pointer">Totes & Handbags</div>
          <div className="text-sm font-semibold cursor-pointer">Briefcase</div>
          <div className="text-sm font-semibold cursor-pointer">Travel Accessories</div>
          <div className="text-sm font-semibold cursor-pointer">About us</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
