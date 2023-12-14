import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

interface Event {
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
interface User {
  user_id: number;
  name: string;
  email: string;
  telephone_number: string;
  events: number | null;
  password: string;
  selected_location: string;
}

const AccountDashboardSideNav: React.FC = () => {
  const [userEvents, setUserEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios.get("/dashboard/your-events")
      .then(response => {
        console.log(response, "response");
        setUserEvents(response.data.events);
      })
      .catch(error => {
        console.error("Error fetching user events:", error);
      });
  }, []);

  return (
    <div>
      <div style={{ marginLeft: '5%', fontSize: '25px', color: 'onyx', fontWeight: 'bold' }}>
        <table className="border-separate border-spacing-2 p-5 mt-100">
          <thead>
            <tr>
              <th className="border border-slate-600 border-none p-2 text-onyx">Dashboard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 border-none p-2 text-onyx">
                {/* Link to the YourEventHistory component */}
                <Link to="/dashboard/your-event">Your Event</Link>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 border-none p-2 text-onyx">
                <Link to="/dashboard/help-center">Help Center</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <ul>
          {userEvents.map(event => (
            <li key={event.id}>
              <Link to={`/event-details/${event.id}`}>
                <p>Event Name: {event.event_name}</p>
                <p>Date: {event.event_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountDashboardSideNav;