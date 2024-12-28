import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !date) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      // Menambah event baru ke Firestore
      const newEvent = {
        name,
        description,
        date: Timestamp.fromDate(new Date(date)),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      await addDoc(collection(db, "events"), newEvent);

      alert("Event added successfully!");
      navigate("/events"); // Redirect ke halaman daftar events setelah berhasil menambah event
    } catch (error) {
      console.error("Error adding event: ", error);
      alert("Failed to add event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold text-primary mb-6">Add New Event</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Event Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter event name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Event Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter event description"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Event Date</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none transition-colors"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
