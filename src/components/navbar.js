import React from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a> for SPA navigation

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-200">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
