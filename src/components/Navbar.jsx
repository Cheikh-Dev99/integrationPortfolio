import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, navLinks } from "../utils/Utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-b from-gray-950 to-transparent shadow-md">
        <div className="container mx-auto px-4 sm:px-32">
          <div className="sm:hidden flex justify-between items-center py-4">
            <div>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:text-white"
              >
                <FaBars size={20} />
              </button>
            </div>
            <div className="text-center text-white">Portfolio</div>
          </div>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex sm:justify-between sm:items-center text-white py-4`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
