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






