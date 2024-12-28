import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all">
      <img src={event.image} alt={event.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{event.name}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-500 mt-2">{event.description}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
