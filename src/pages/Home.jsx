import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-screen flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-5xl font-poppins mb-4">Welcome to GDG Campus!</h1>
      <p className="text-xl mb-8">Join us for exciting events and networking opportunities in the tech community.</p>
      <Link to="/events" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all">
        View Upcoming Events
      </Link>
    </div>
  );
};

export default Home;
