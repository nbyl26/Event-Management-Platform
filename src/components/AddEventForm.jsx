import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        name: eventName,
        date: eventDate,
        description: eventDescription,
      });
      console.log('Document written with ID: ', docRef.id);
      setEventName('');
      setEventDate('');
      setEventDescription('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Event Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        placeholder="Event Description"
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-primary text-white py-2 rounded">
        Add Event
      </button>
    </form>
  );
};

export default AddEventForm;
