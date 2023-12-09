import React from "react";
import '../gallery/Gallery.css';
import Button from "../AccountInformation/Buttons/button";

type Props = {};

const backgroundStyle = {
  backgroundImage: 'url("dave-lastovskiy-RygIdTavhkQ-unsplash.jpg")',
  width: "100%",
  height: "25vh",
}

const Gallery = (props: Props) => {
  return (
  <div>
      <div className="pageContainer">  
      <div style={backgroundStyle}>
      <img
          src='client/src/assets/images/ian-schneider-PAykYb-8Er8-unsplash.jpg'
          alt="Event"
          className="w-full"
        />
        </div>
        <h1 className="title">Gallery</h1>
      <p className="strapLine">Some of the highlights from the events we have been a part of this season</p>
      <div className="flex overflow-x-auto">
      <div className="flex-none w-full flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          alt="Event"
          className="w-full"
        />
      </div>
      <div className="flex-none w-full flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          alt="Event"
          className="w-full"
        />
      </div>
      <div className="flex-none w-full flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          alt="Event"
          className="w-full"
        />
      </div>
      <div className="flex-none w-full flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          alt="Event"
          className="w-full"
        />
        <Button text="Click to Create Your Event" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Gallery;






