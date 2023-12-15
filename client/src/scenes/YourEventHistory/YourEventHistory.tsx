import "./YourEventHistory.css";

import React, { useEffect, useState } from "react";
import mainBgCover from "../../GalleryComponent/mainBgCover.jpg";
import Button from "../AccountInformation/Buttons/button";
import { Link } from 'react-router-dom';
import { RootState } from "../../redux/store";
import axios from "axios";
import { useSelector } from "react-redux";

interface EventDetails {
  id: number;
  user_id: number;
  event_name: string;
  event_theme: string;
  event_date: string;
  event_time: string;
  location: string;
  catering_type: string;
  decoration_style: string;
  event_status: string;
  event_confirmed: string;
  location_new: string;
}

const YourEventHistory: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userData?.user_id);
  const [currentEvent, setCurrentEvent] = useState<EventDetails[] | null>(null);

  useEffect(() => {
    axios
      .get(`/dashboard/event-details/${userId}`)
      .then(response => {
        setCurrentEvent(response.data.eventDetails);
      })
      .catch(error => {
        console.error("Error fetching event details:", error);
      });
  }, [userId]);

  return (
    <div className="mt-10 p-5 bg-cover bg center bg-no-repeat opacity-95" style={{ backgroundImage: `url(${mainBgCover})` }}>
      <div className="text-center py-5">
        <h1 className="text-5xl font-bold mt-10 mb-10">Event History</h1>
        <p className="text-xl mb-10">All your Events in one place</p>
      </div>

      <div className="bg-gray-200 p-8 rounded-md">
        <h1 className="text-3xl font-bold">Your Current Event</h1>
        {currentEvent?.length ? (
          currentEvent.map((event, index) => (
            <div key={index}>
              <p>Event Name: {event.event_name}</p>
              <p>Event Location: {event.location}</p>
              <p>Event Catering: {event.catering_type}</p>
              <p>Event Theme: {event.event_theme}</p>
              <p>Event Date: {event.event_date}</p>
              <p>Event Time: {event.event_time}</p>
            </div>
          ))
) : (
  <p>No current event found.</p>
)}
      </div>

      {/* Centered Button */}
      <div className="centeredButton">
        <Link to="/account-dashboard">
          <Button text="Return to Dashboard" />
        </Link>
      </div>
    </div>
  );
};

export default YourEventHistory;
