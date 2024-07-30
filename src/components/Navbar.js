import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition-colors">
          Account Manager
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/login" 
              className="text-lg hover:text-gray-400 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className="text-lg hover:text-gray-400 transition-colors"
            >
              Register
            </Link>
          </li>
          <li>
            <Link 
              to="/account" 
              className="text-lg hover:text-gray-400 transition-colors"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
