// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primary text-white p-4 shadow-md fixed w-full z-10 top-0 left-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    GDG Event Platform
                </Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="hover:text-accent">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" className="hover:text-accent">Events</Link>
                    </li>
                    <li>
                        <Link to="/add-event" className="hover:text-accent">Add Event</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
