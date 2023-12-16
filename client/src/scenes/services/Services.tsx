import React from "react";
import { Link } from 'react-router-dom';
import Button from "../AccountInformation/Buttons/button";
import bGServiceImage from "../../GalleryComponent/bGServiceImage.jpg"


const Services: React.FC = () => {
  return (
    <div className="gridContainer bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bGServiceImage})` }}>
      <img src="client/src/GalleryComponent/bgServiceImage.jpg" alt="" />
      <div className="sHeading bg-cover bg-center h-3/4 bg-onyx rounded-lg m-10 mt-20 opacity-80">
        <h1 className="title text-5xl text-white pt-20 text-center font-bold p-5 mt-5">EventHub Services</h1>
        <p className="strapLine text-2xl text-white text-center p-5">
          Planning - Location  - Catering - Theme - Design
        </p>
        <p className="strapLine2 text-lg text-white text-navigation p-20 text-start">
          Here at EventHub, we have created tailored party packages for all ages.
          From Birthday Parties and Baby Showers to Ladies' and Guy's Nights.
          See below for our list of services and the event planning journey.
          Follow our seamless plan to create your perfect event.
        </p>
      </div>

      <div className="userJourney p-10 m-20 flex flex-col items-center bg-white rounded-lg opacity-90">
        <h2 className="text-4xl font-bold text-center mb-10">Your Journey Starts Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-5 flex flex-col items-center">

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3">SignUp/ Login</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3">Create Account</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Select Occasion</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Start Creating your Event</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Select Package Theme </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Select Catering</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Select Location</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Select Styling Preference</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Submit Your Event Request!</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >Confirm Date and Time</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path></svg></div>

          <div className="flex items-center w-3/3 flex flex-col items-center p-5">
            <div className="serviceTab bg-onyx text-white font-bold text-center p-8 rounded-lg w-2/3" >You're Finished!</div>
          </div>

          <div className="submitText mt-20 bg-sage rounded-lg font-bold text-onyx text-center p-5">
            Once you submit your event plan, a member of the team will be in touch to discuss the next steps within 24 hours.
          </div>
        </div>

        <div className="text-center w-full mt-8 opacity-100">
          <Link to="/contact-us">
            <Button text="Get in touch" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
