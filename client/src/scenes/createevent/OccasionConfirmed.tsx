import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OccasionConfirmed = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    // Fetch event details when the component mounts
    axios.get("http://localhost:3001/occasion-details")
      .then(response => {
        setEventDetails(response.data.eventDetails);
      })
      .catch(error => {
        console.error("Error fetching event details:", error);
      });
  }, []);

  return (
    <div className="relative pt-20 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-mukta mb-4" style={{ color: "#000000" }}>
        Occasion Confirmed!
      </h1>
      <p
        className="font-mukta mb-4 text-center text-lg leading-relaxed max-w-md"
        style={{ color: "#4B5563" }}
      >
        Thank you for choosing Event Hub for your upcoming event! We are excited
        to be a part of this special occasion and to create unforgettable
        moments together. Our team will contact you shortly with further
        information regarding your booking. Let the countdown begin!
      </p>
    </div>
  );
};

export default OccasionConfirmed;
