import React from "react";
import { Link } from 'react-router-dom';
import '../services/Services.css';
import Button from "../AccountInformation/Buttons/button";
import arrowRight from "../../assets/images/GalleryComponent/arrowRight.jpg";
import arrowLeft from "../../assets/images/GalleryComponent/arrowLeft.jpg";
import arrowDown from "../../assets/images/GalleryComponent/arrowDown.jpg";
import arrowDownCurveLeft from "../../assets/images/GalleryComponent/arrowDownCurveLeft.jpg";
import arrowDownCurveRight from "../../assets/images/GalleryComponent/arrowDownCurveRight.jpg";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="gridContainer">
      <div>
        <div className="sHeading">
      <h1 className="title">EventHub Services</h1>
      <p className="strapLine">Planning - Location  - Catering - Theme - Design</p>
      <p className="strapLine2">Here at EventHub, we have created tailored party packages for All age Birthday party’s,<br />
         Baby showers and Bridal Showers. See Below our list of services and the event planning journey. <br />Follow our seamless plan to creating your perfect event.</p>
         </div>
      </div>
      <div className="userJourney">
        <h2>Your Journey Starts Here</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="serviceTab" >SignUp/Login </div>
        <img className="arrows" src={arrowRight} alt="arrow right" />
        <div className="serviceTab" >Create Account</div>
        <img className="arrowDownCurve" src={arrowDownCurveRight} alt="arrow down right" />
        <div className="serviceTab" >Select Occasion</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
         <div className="serviceTab" >Start Creating your Event</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
        <img className="arrows" src={arrowDownCurveLeft} alt="arrow down left" />
        <img className="arrows" src={arrowRight} alt="arrow right" />
        <div className="serviceTab" >Select Package Theme </div>
        <img className="arrows" src={arrowDownCurveRight} alt="arrow down" />
        <div className="serviceTab" >Select Catering</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
        <div className="serviceTab" >Select Location</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
        <img className="arrows" src={arrowDownCurveLeft} alt="arrow down" />
        <img className="arrows" src={arrowRight} alt="arrow right" />
        <div className="serviceTab" >Select Styling Preference</div>
        <img className="arrows" src={arrowDownCurveRight} alt="arrow right" />
        <div className="serviceTab" >Submit Your Event Request!</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
        <div className="serviceTab" >Confirm Date and Time</div>
        <img className="arrows" src={arrowLeft} alt="arrow left" />
        
        
        </div>
        <div className="submitText" > Once you submit your event plan a member of the team will be in touch to discuss the next steps within 24 hrs
</div>
</div>
<Link to="/contactus">
<Button text="Get in touch" />
    </Link>


</div>

  );
  
};

export default Services;
