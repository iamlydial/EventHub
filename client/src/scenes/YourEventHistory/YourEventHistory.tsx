import React from "react";
import { Link } from 'react-router-dom';
import Button from "../AccountInformation/Buttons/button";
import mainBgCover from "../../GalleryComponent/mainBgCover.jpg";

const YourEventHistory: React.FC = () => {
  return (
    <div className="mt-10 p-5 bg-cover bg center bg-no-repeat opacity-95" style={{ backgroundImage: `url(${mainBgCover})` }}>
      <div className="text-center py-5">
        <h1 className="text-5xl font-bold mt-12 pt-20 mb-10">Event History</h1>
        <p className="text-xl mb-10">All your current and past events in one place</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-onyx p-8 rounded-md">
          <h1 className="text-3xl font-bold">Your Current Event</h1>
          <p className="text-lg mt-4">
            Check in to see all the current details and status updates of your event.
          </p>
          <Link to="/account-dashboard">
            <Button text="Start Here" className="w-full" />
          </Link>
        </div>
        <div className="bg-onyx p-8 rounded-md">
          <h1 className="text-3xl font-bold">Your Previous Event</h1>
          <p className="text-lg mt-4">
            Check to see all the details from your previous event.
          </p>
          <Link to="/account-dashboard">
            <Button text="Check Here" className="w-full" />
          </Link>
        </div>
        <div className="bg-onyx p-8 rounded-md block w-full">
          <h1 className="text-3xl font-bold">Event History Log</h1>
          <p className="text-lg mt-4">
            Click to see the history of all your events.
          </p>
          <Link to="/account-dashboard">
            <Button text="Get in touch" className="w-full" />
          </Link>
        </div>
      </div>
      <Link to="/account-dashboard" className="block mt-5 p-5">
        <Button text="Back to Dashboard" />
      </Link>
    </div>
  );
};

export default YourEventHistory;
