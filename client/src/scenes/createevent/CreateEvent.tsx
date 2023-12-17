import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GreySquiggle from "../../assets/images/GreySquiggle.jpg";
import createEventBg from "../../GalleryComponent/createEventBg.jpg"
import whiteballoons from "../../assets/images/whiteballoons.jpg";
import axios from "axios";

const CreateEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [nextClicked, setNextClicked] = useState(false);

  useEffect(() => {
    // Fetch event types for our frontend
    axios
      .get("/event-types")
      .then((response) => {
        setEventTypes(response.data.eventTypes);
      })
      .catch((error) => {
        console.error("Error fetching event types:", error);
      });
  }, []);

  console.log("Current route:", location.pathname);

  const handleOptionClick = (option: string) => {
    console.log("Selected Option:", option);
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

    setNextClicked(true);

    axios.post("/create-event", { event_name: selectedOption })
      .then(response => {

        navigate("/location");
      })
      .catch((error) => {
        console.error("Error creating event:", error);
      });
  };

  useEffect(() => {
    if (nextClicked) {
      navigate("/location");
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
        Occassion
      </h3>

      <ul className="text-center mb-8">
        <li>
          <h1 className="text-2xl font-bold mb-4">
            Time To Create Your Event!
          </h1>
        </li>
        <li>
          <h3 className="font-bold mb-4">
            Click on a tab to choose your occasion
          </h3>
        </li>
        <li>
          <h3 className="font-bold mb-4" style={{ color: "#D4A69E" }}>
            Let's get started
          </h3>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption === "Birthday" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Birthday")}
        >
          Birthday
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption === "Kids Birthday" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Kids Birthday")}
        >
          Kid's Birthday
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption === "Baby Shower" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Baby Shower")}
        >
          Baby Shower
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption === "Bridal Party" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Bridal Party")}
        >
          Bridal Party
        </button>
      </div>
      <div className="absolute bottom-10 right-10 lg:right-10 flex flex-col items-center">
        <p className="font-bold text-center mb-1" style={{ color: "#D4A69E" }}>
          Location
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutchWhite hover:bg-sage font-black"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
