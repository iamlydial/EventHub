import React from "react";
import { Link } from 'react-router-dom';
import Button from "../Buttons/button";


const AccountDashboardTabs: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mb-20">
      <div className="w-1/2 bg-onyx rounded-lg text-white text-center p-4 m-4">
        <h1 className="text-2xl font-bold mb-4">Create Your Event</h1>
        <p className="text-lg">
          Select a theme for the event, create a to-do list, and choose vendors for each item.
        </p>
        <Link to="/create-event">
          <Button text="Start Here" />
        </Link>
      </div>

      <div className="w-1/2 bg-onyx rounded-lg text-white text-center p-4 m-4">
        <h1 className="text-2xl font-bold mb-4">Your Event History</h1>
        <p className="text-lg">
          Check in with the status of your current event and browse through your previous events.
        </p>
        <Link to="/your-event-history">
          <Button text="Check Here" />
        </Link>
      </div>

      <div className="w-1/2 bg-onyx rounded-lg text-white text-center p-4 m-4">
        <h1 className="text-2xl font-bold mb-4">Need Help?</h1>
        <p className="text-lg">
          If you need help with your event, don't hesitate to contact our Event planner assistants and book a call.
        </p>
        <Link to="/contact-us">
          <Button text="Get in touch" />
        </Link>
      </div>
    </div>
  );
}

export default AccountDashboardTabs;
