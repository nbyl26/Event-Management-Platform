// src/pages/EventDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Untuk menangani parameter di URL
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const EventDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventDoc = await getDoc(doc(db, "events", id));
        if (eventDoc.exists()) {
          setEvent(eventDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching event: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {event ? (
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">{event.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{event.description}</p>
          <p className="text-md text-gray-500 mb-4">Date: {event.date.toDate().toLocaleDateString()}</p>
          <p className="text-sm text-gray-400">Created At: {event.createdAt.toDate().toLocaleDateString()}</p>
          <p className="text-sm text-gray-400">Updated At: {event.updatedAt.toDate().toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
};

export default EventDetail;
