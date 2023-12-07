import React from "react";
import { Link } from 'react-router-dom';
import Button from "../Buttons/button";
import '/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/scenes/AccountInformation/AccDashboardTabs/accountdashboardtabs.css';
// import '/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/scenes/AccountInformation/Buttons/button.css'

const AccountDashboardTabs: React.FC = () => {
    return (
      <div className="accountTabs">

      <div className="eventTab">
        <h1 className="tabHeading" >Create Your Event</h1>
         <p className="eventPText">
             Select a theme for the event, create a to-do list, and choose vendors for each item.
           </p> <Link to="/createevent">
           <Button text="Start Here" />
    </Link>
      </div>
      <div className="eventTab">
        <h1 className="tabHeading" >Your Event History</h1>
         <p className="eventPText">
         Check in with the status of your current event and browse through your previous events.
           </p>
           <Link to="/youreventhistory">
           <Button text="Check Here" />
           </Link>
      </div>
      <div className="eventTab">
        <h1 className="tabHeading" >Need Help?</h1>
         <p className="eventPText">
         If you need help with your event, don't hesitate to contact our Event planner assistants and book a call.
           </p>
           <Link to="/contactus">
           <Button text="Get in touch"  />
    </Link>
      </div>
      </div>
    )
}
      
export default AccountDashboardTabs;

