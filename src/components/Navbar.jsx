import React from 'react';
import { FaInfoCircle, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#004080] shadow-lg ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="h-8" />
        </div>

        <div className="flex-grow flex justify-center space-x-8  text-white">
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Luggage</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Backpack</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Totes & Handbags</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">Briefcase</div>
          <div className="text-sm font-semibold text-gray-200 cursor-pointer">travel Accessories</div>
        </div>

       
        <div className="flex items-center space-x-6">
        <div className="text-sm font-semibold text-gray-200 cursor-pointer">About us</div>
        <div className=' flex'>
          <div className="relative">
            <FaSearch className="text-xl cursor-pointer text-gray-200" />
          </div>
          <div className="relative">
          <Link to="/admin"> <FaUser className="text-xl cursor-pointer text-gray-200" /> </Link>  
          </div>
          <div className="relative">
            <FaShoppingCart className="text-xl cursor-pointer text-gray-200" />
          </div>
        </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
