import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          GDG Event Platform
        </Link>
        <div>
          <Link to="/events" className="mx-2 hover:underline">
            Events
          </Link>
          <Link to="/about" className="mx-2 hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
