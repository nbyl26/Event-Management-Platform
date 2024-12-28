import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Impor konfigurasi Firestore
import { collection, getDocs } from "firebase/firestore"; // Impor Firestore API
import EventCard from "../components/EventCard"; // Komponen untuk menampilkan card event

const Events = () => {
  const [events, setEvents] = useState([]); // State untuk menampung data event

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Mengambil data dari koleksi 'events'
        const querySnapshot = await getDocs(collection(db, "events"));
        
        // Memetakan data dari setiap dokumen di koleksi
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // ID dokumen
          ...doc.data(), // Data event
        }));

        // Menyimpan data event ke state
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents(); // Panggil fungsi untuk mengambil data saat komponen dimuat
  }, []); // Empty array sebagai dependensi untuk hanya menjalankan sekali saat mounting komponen

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20 mb-10 text-primary">
        Upcoming Events
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {/* Map data events ke EventCard */}
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
