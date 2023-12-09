import React from "react";

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


