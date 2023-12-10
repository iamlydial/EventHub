import React from "react";
import profilePicture from "/Users/mimibrown/Documents/EventHubGroup6Project/EventHub/client/src/assets/images/GalleryComponent/profilePicture.jpg";


const Heading: React.FC = () => {
  return (
    <div className="flex items-center mt-10">
      <h1 className="text-5xl text-gray-800 mr-16 ml-8">Welcome, userName</h1>
      <div className="ml-auto mr-10">
      <ProfilePicture />
      </div>
    </div>
    
  );
};

const ProfilePicture: React.FC = () => {
  const imageStyle: React.CSSProperties = {
    width: "12rem",
    height: "12rem",
    borderRadius: "50%",
  };

  const imagesList = [
    {
      id: 1,
      src: profilePicture,
      alt: "profilePicture",
    },
  ];

  return (
    <>
      {imagesList.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={imageStyle}
          className="rounded-full"
        />
      ))}
    </>
  );
};

export default Heading;
=======

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

  const imageStyle: React.CSSProperties = {
    width: "250px",
    height: "250px",
    borderRadius: "50%", // Optional: Makes the image round
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, (userName) </h1>

      <img
        src="/profileImage.jpg"
        alt="profile image placeholder"
        style={imageStyle}
      />
    </div>
  );
};
<hr />
export default Heading;



