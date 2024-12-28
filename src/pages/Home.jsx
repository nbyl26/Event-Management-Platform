import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GDG Event Platform</h1>
        <p className="text-lg mb-8">
          Discover, participate, and connect in amazing tech events hosted by GDG on Campus UNSRI!
        </p>
        <a
          href="/events"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all"
        >
          Explore Events
        </a>
      </div>
    </div>
  );
};

export default Home;
