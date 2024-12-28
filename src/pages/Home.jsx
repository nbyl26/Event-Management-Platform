// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-primary">Welcome to GDG Event Platform</h1>
      <p className="mt-4 text-xl text-gray-600">Organize and manage events effortlessly</p>
      <Link
        to="/events"
        className="mt-6 inline-block bg-accent text-white py-3 px-6 rounded-lg hover:bg-primary transition duration-300"
      >
        View Events
      </Link>
    </div>
  );
};

export default Home;
