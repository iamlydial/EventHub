import React from "react";
import '../services/Services.css';
import Button from "../AccountInformation/Buttons/button";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="gridContainer">
      <div>
      <h1 className="title">EventHub Services</h1>
      <p className="strapLine">Planning - Location  - Catering - Theme - Design</p>
      <p className="strapLine2">Here at EventHub, we have created tailored party packages for All age Birthday party’s,<br />
         Baby showers and Bridal Showers. See Below our list of services and the event planning journey. <br />Follow our seemless plan to creating your perfect event.
</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="serviceTab" >SignUp/Login</div>
        <div className="serviceTab" >Create Account</div>
        <div className="serviceTab" >Start Creating your Event</div>
        <div className="serviceTab" >Select Location</div>
        <div className="serviceTab" >Select Package Theme </div>
        <div className="serviceTab" >Select Occasion</div>
        <div className="serviceTab" >Select Catering</div>
        <div className="serviceTab" >Select Styling Preference</div>
        <div className="serviceTab" >Confirm Date and Time</div>
</div>
<Button text="Get in touch" />

<div className="submitText" > Once you submit your event plan a member of the team will be in touch to discuss the next steps within 24 hrs
</div>
</div>

  );
  
};

export default Services;
