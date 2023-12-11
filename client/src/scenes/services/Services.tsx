import React from "react";
import { Link } from 'react-router-dom';
import arrowRight from "../../GalleryComponent/arrowRight.jpg";
import arrowLeft from "../../GalleryComponent/arrowLeft.jpg";
import arrowDown from "../../GalleryComponent/arrowDown.jpg";
import arrowDownCurveLeft from "../../GalleryComponent/arrowDownCurveLeft.jpg";
import arrowDownCurveRight from "../../GalleryComponent/arrowDownCurveRight.jpg";
import Button from "../AccountInformation/Buttons/button";


const Services: React.FC = () => {
  return (
    <div className="gridContainer">
      <div className="sHeading bg-cover bg-center h-3/4 ">
        <h1 className="title text-5xl text-navigation pt-20 text-center p-5 mt-5">EventHub Services</h1>
        <p className="strapLine text-2xl text-navigation text-center p-5">
          Planning - Location  - Catering - Theme - Design
        </p>
        <p className="strapLine2 text-lg text-navigation p-20">
          Here at EventHub, we have created tailored party packages for All age Birthday party’s,
          Baby showers and Bridal Showers. See Below our list of services and the event planning journey.
          Follow our seamless plan to creating your perfect event.
        </p>
      </div>
      
      <div className="userJourney border-4 border-navigation rounded-xl p-10 m-10">
        <h2 className="text-3xl font-bold text-center mb-10">Your Journey Starts Here</h2>
        <div className="grid grid-cols-4 gap-4 p-5 ml-20">
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3">SignUp/ Login</div>
          <img className="arrows" src={arrowRight} alt="arrow right" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3">Create Account</div>
          <img className="arrowDownCurve" src={arrowDownCurveRight} alt="arrow down right" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Select Occasion</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Start Creating your Event</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
          <img className="arrows" src={arrowDownCurveLeft} alt="arrow down left" />
          <img className="arrows" src={arrowRight} alt="arrow right" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Select Package Theme </div>
          <img className="arrows" src={arrowDownCurveRight} alt="arrow down" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Select Catering</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Select Location</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
          <img className="arrows" src={arrowDownCurveLeft} alt="arrow down" />
          <img className="arrows" src={arrowRight} alt="arrow right" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-333" >Select Styling Preference</div>
          <img className="arrows" src={arrowDownCurveRight} alt="arrow right" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Submit Your Event Request!</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
          <div className="serviceTab bg-navigation text-white text-center p-3 rounded-lg w-3/3" >Confirm Date and Time</div>
          <img className="arrows" src={arrowLeft} alt="arrow left" />
        </div>
        
        <div className="submitText mt-20 bg-navigation rounded-lg text-white text-center p-5">
          Once you submit your event plan, a member of the team will be in touch to discuss the next steps within 24 hrs.
        </div>
        
        <Link to="/contact-us" className="block w-3/3 mx-auto mt-10 ml-auto">
          <Button text="Get in touch" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
