import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const EventDetail = () => {
    const { id } = useParams(); // Mendapatkan id dari URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const docRef = doc(db, "events", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setEvent(docSnap.data());
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
        return <div>Loading...</div>; // Menampilkan loading saat data masih diambil
    }

    if (!event) {
        return <div>No event found</div>; // Menampilkan pesan jika event tidak ditemukan
    }

    return (
        <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-primary mb-4">{event.name}</h1>
            <p className="text-sm text-gray-600 mb-4">{event.description}</p>
            <p className="text-xs text-gray-500 mb-4">Date: {new Date(event.date.seconds * 1000).toLocaleDateString()}</p>
            <p className="text-xs text-gray-500 mb-4">
                Created At: {new Date(event.createdAt.seconds * 1000).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500 mb-4">
                Last Updated: {new Date(event.updatedAt.seconds * 1000).toLocaleDateString()}
            </p>
        </div>
    );
};

export default EventDetail;
