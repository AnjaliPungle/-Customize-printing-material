import React, { useState } from "react";
import { Heart, ShoppingCart, ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div className="w-full shadow-md font-sans">
      {/* First Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white">
        <div className="text-2xl font-bold text-gray-800"> <img src="Frame 235.png" alt="" /></div>

        <div className="flex-1 max-w-xl mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-red-500">
            <Heart />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <ShoppingCart />
          </button>
          
          <button className="text-gray-600 hover:text-blue-600">
              <User/>
          </button>
          
        </div>
      </div>

      {/* Second Navbar */}
      <div className="bg-gray-100 px-6 py-2 relative z-10">
        <nav className="flex gap-6 text-gray-700 font-medium text-sm relative">
          {/* All Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("all")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              All Products <ChevronDown size={14} />
            </button>
            {openMenu === "all" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 grid grid-cols-2 gap-2 w-64 z-50">
                {[
                  "Bags",
                  "Pen",
                  "Notepad",
                  "Bootles",
                  "T-Shirts",
                  "Mugs",
                  "Desk Photoframes",
                  "Wall Big Photoframes",
                  "Wall Photoframes Set",
                  "Acrylic Photoframes",
                  "College Photoframe",
                  "Bracelets",
                  "Shirts",
                  "Key Chains",
                  "Fridge Magnets",
                  "Laptop Skin",
                  "Phone Covers",
                  "Anniversary Cards",
                  "Weeding Cards",
                  "Thank You Cards",
                ].map((item) => (
                  <span key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Corporate Stationaries Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("corporate")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Corporate Stationaries <ChevronDown size={14} />
            </button>
            {openMenu === "corporate" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 grid grid-cols-2 gap-2 w-64 z-50">
                {["Bags", "Pen", "Notepad", "Bootles", "T-Shirts", "Mugs"].map((item) => (
                  <span key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Drinkwares Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("drinkwares")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Drinkwares <ChevronDown size={14} />
            </button>
            {openMenu === "drinkwares" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 grid grid-cols-1 gap-2 w-40 z-50">
                {["Mugs", "Bottles"].map((item) => (
                  <span key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Photoframes Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("photoframes")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Photoframes <ChevronDown size={14} />
            </button>
            {openMenu === "photoframes" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 grid grid-cols-1 gap-2 w-64 z-50">
                {[
                  "Desk Photoframes",
                  "Wall Big Photoframes",
                  "Wall Photoframes Set",
                  "Acrylic Photoframes",
                  "College Photoframe",
                ].map((item) => (
                  <span key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Gifting & Other Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("gifting")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Gifting & Other <ChevronDown size={14} />
            </button>
            {openMenu === "gifting" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 grid grid-cols-2 gap-2 w-64 z-50">
                {[
                  "Mugs",
                  "Bracelets",
                  "Shirts",
                  "Key Chains",
                  "Fridge Magnets",
                  "Laptop Skin",
                  "Phone Covers",
                  "Anniversary Cards",
                  "Weeding Cards",
                  "Thank You Cards",
                ].map((item) => (
                  <span key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Support */}
          <a href="#" className="hover:text-blue-600">
            Support
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
