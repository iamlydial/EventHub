import React from "react";
import { Link } from 'react-router-dom';
import '../YourEventHistory/YourEventHistory.css';
import Button from "../AccountInformation/Buttons/button";
import "/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/scenes/YourEventHistory/YourEventHistory.css"

const YourEventHistory: React.FC = () => {
    return (
      <div className="allEventTabs">
        <div className="eventHistoryTitle">
        <h1 className="eventHistoryHeading">Event History</h1>
        <p className="eventHistoryP">All your Events current and past history all in one place</p>
        </div>
      <div className="eventTab">
        <h1 className="tabHeading" >Your Current Event</h1>
         <p className="eventPText">
             Check in to see all the current details and status updates of your current event.
           </p> <Link to="/accoundashboard">
           <Button text="Start Here" />
    </Link>
      </div>
      <div className="eventTab">
        <h1 className="tabHeading" >Your Previous Event</h1>
         <p className="eventPText">
         Check to see all the details from your previous event.
           </p>
           <Link to="/accoundashboardy">
           <Button text="Check Here" />
           </Link>
      </div>
      <div className="eventTab">
        <h1 className="tabHeading" >Event History Log</h1>
         <p className="eventPText">
         Click to see the history of all the events you have done.
           </p>
           <Link to="/accoundashboard">
           <Button text="Get in touch"  />
    </Link>
      </div>
      <Link to="/accountdashboard.tsx">
           <Button text="Back to Dashboard"  />
    </Link>
      </div>
    )
}
      
export default YourEventHistory;

