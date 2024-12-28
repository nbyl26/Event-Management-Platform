import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import EventCard from '../components/EventCard';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventCollection = collection(db, 'events');
            const eventSnapshot = await getDocs(eventCollection);
            const eventList = eventSnapshot.docs.map(doc => doc.data());
            setEvents(eventList);
        };
        fetchEvents();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default Events;
