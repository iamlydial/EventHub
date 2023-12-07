import React from "react";
import { Link } from 'react-router-dom';
import '/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/scenes/AccountInformation/Heading /Heading.css';
import profilePicture from "/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/assets/images/GalleryComponent/profilePicture.jpg";

const Heading: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center", // Align items vertically in the center
    marginTop: "10%",
  };

  const headingStyle: React.CSSProperties = {
    color: "onyx",
    fontSize: "5rem",
    marginRight: "200px", // Space between heading and image
    marginLeft: "90px",
  };

  const imagesList = [
    {
      id: 1,
      src: profilePicture,
      alt: "profilePicture",
   },
  ];

  const imageStyle: React.CSSProperties = {
    width: "300px",
    height: "300px",
    borderRadius: "50%", 
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, (userName) </h1>

      {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} style={imageStyle}/>
        ))}

    </div>
  );
};
<hr />
export default Heading;


