import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import whiteballoons from "../../assets/images/whiteballoons.jpg";

import axios from "axios";

const Location = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [locationTypes, setLocationTypes] = useState<string[]>([]);
  const [nextClicked, setNextClicked] = useState(false);

  useEffect(() => {
    // Fetch location types for our frontend
    axios
      .get("/location-options")
      .then((response) => {
        setLocationTypes(response.data.locationTypes);
      })
      .catch((error) => {
        console.error("Error fetching location types:", error);
      });
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      alert("Please select a location before proceeding.");
      return;
    }

    setNextClicked(true);

    axios
      .post("/choose-location", { location_type: selectedOption })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error choosing location:", error);
      });
  };

  useEffect(() => {
    if (nextClicked) {
      navigate("/catering");
    }
  }, [nextClicked, navigate]);

  return (
    <div
      className="relative pt-20 flex flex-col items-center justify-center h-screen bg-white-300"
      style={{
        backgroundImage: `url(${whiteballoons})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3
        className="absolute top-24 left-4 font-bold text-center mt-3"
        style={{ color: "#D4A69E" }}
      >
        Location
      </h3>

      <ul className="text-center mb-8 mt-4">
        <li>
          <h3 className="font-bold mb-4">
            Click on a tab to choose your location
          </h3>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Grand Venue" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Grand Venue")}
        >
          Grand Venue
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Bar" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Bar")}
        >
          Bar
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Garden" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Garden")}
        >
          Garden
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Intimate Venue" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Intimate Venue")}
        >
          Intimate Venue
        </button>
      </div>

      <div className="absolute bottom-10 right-10 lg:right-10 flex flex-col items-center">
        <p className="font-bold text-center mb-1" style={{ color: "#D4A69E" }}>
          Catering
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutchWhite hover:bg-sage font-black"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>

      <div className="absolute bottom-10 left-10 lg:left-10 flex flex-col items-center">
        <p className="font-bold text-center mb-1" style={{ color: "#D4A69E" }}>
          Occasion
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutchWhite hover:bg-sage font-black"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Location;
