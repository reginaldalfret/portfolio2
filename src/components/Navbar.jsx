import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold">
          My Portfolio
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-700 hover:text-gray-900">
              Experience
            </a>
          </li>
          <li>
            <a href="#works" className="text-gray-700 hover:text-gray-900">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
