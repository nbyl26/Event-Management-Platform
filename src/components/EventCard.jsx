import React from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const EventCard = ({ event }) => {
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "events", event.id));
            alert("Event deleted successfully!");
        } catch (error) {
            console.error("Error deleting event: ", error);
        }
    };

    // Format tanggal untuk ditampilkan lebih rapi
    const formattedDate = new Date(event.date.seconds * 1000).toLocaleDateString();

    return (
        <div className="bg-white border rounded-lg shadow-lg hover:scale-105 transform transition duration-500 group">
            <div className="p-6">
                {/* Nama event */}
                <h3 className="text-2xl font-semibold text-primary mb-2">{event.name}</h3>

                {/* Deskripsi event */}
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>

                {/* Tanggal event */}
                <p className="text-xs text-gray-500 mb-6">{formattedDate}</p>

                {/* Tombol aksi */}
                <div className="flex justify-between items-center">
                    <Link
                        to={`/event/${event.id}`}
                        className="text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
