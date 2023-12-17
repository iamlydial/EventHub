import "./YourEventHistory.css";

import React, { useEffect, useState } from "react";

import Button from "../AccountInformation/Buttons/button";
import { Link } from 'react-router-dom';
import { RootState } from "../../redux/store";
import axios from "axios";
import mainBgCover from "../../GalleryComponent/mainBgCover.jpg";
import { useSelector } from "react-redux";

interface EventDetails {
  ID: number;
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
  const user = useSelector((state: RootState) => state.user.userData);

  const [currentEvent, setCurrentEvent] = useState<EventDetails[] | null>(null);
  const ongoingEvent = currentEvent?.[currentEvent?.length - 1];

  useEffect(() => {
    if (user?.user_id) {
      axios
        .get(`/dashboard/event-details/${user?.user_id}`)
        .then(response => {
          setCurrentEvent(response.data.eventDetails);
        })
        .catch(error => {
          console.error("Error fetching event details:", error);
        });
    }
  }, [user?.user_id]);

  return (
    <div className="mt-10 p-5 bg-cover bg center bg-no-repeat opacity-95" style={{ backgroundImage: `url(${mainBgCover})` }}>
      <div className="text-center py-5">
        <h1 className="text-5xl font-bold mt-12 pt-20 mb-10">Event History</h1>
        <p className="text-xl mb-10">All your past and current events in one place</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-onyx p-8 rounded-md">
          <h1 className="text-3xl font-bold">Your Current Event</h1>
          <p className="text-lg my-4">
            Below are all the current Event details:
          </p>
          {ongoingEvent && <div key={ongoingEvent.ID} className="event-history">
            <p>Event Name: {ongoingEvent.event_name}</p>
            <p>Event Location: {ongoingEvent.location}</p>
            <p>Event Catering: {ongoingEvent.catering_type}</p>
            <p>Event Theme: {ongoingEvent.event_theme}</p>
            <p>Event Date: {ongoingEvent.event_date}</p>
            <p>Event Time: {ongoingEvent.event_time}</p>
          </div>}
        </div>
        <div className="bg-onyx p-8 rounded-md">
          <h1 className="text-3xl font-bold">Your Previous Event</h1>
          <p className="text-lg my-4">
            Below are your previous Event:
          </p>
          {currentEvent && currentEvent.length > 1 && currentEvent?.splice(0, currentEvent.length - 1).map((event) => <div key={event.ID} className="event-history">
            <p>Event Name: {event.event_name}</p>
            <p>Event Location: {event.location}</p>
            <p>Event Catering: {event.catering_type}</p>
            <p>Event Theme: {event.event_theme}</p>
            <p>Event Date: {event.event_date}</p>
            <p>Event Time: {event.event_time}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default YourEventHistory;