import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GreySquiggle from "../../assets/images/GreySquiggle.jpg";

const CreateEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Current route:", location.pathname);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    console.log("Selected Option:", option);
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

    console.log("Selected Option:", selectedOption);

    navigate("/location");
  };
  return (
    <div className="relative pt-20 flex flex-col items-center justify-center h-screen">
      <h3
        className="absolute top-20 left-4 font-mukta font-bold text-center mt-4"
        style={{ color: "#D4A69E" }}
      >
        Occasion
      </h3>

      <ul className="text-center mb-8">
        <li>
          <h1 className="font-mukta font-bold mb-4">
            Time To Create Your Event!
          </h1>
        </li>
        <li>
          <h3 className="font-mukta mb-4">
            Click on a tab to choose your occasion
          </h3>
        </li>
        <li>
          <h3 className="font-mukta mb-4" style={{ color: "#D4A69E" }}>
            Lets get started
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
          Kids Birthday
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
        <p
          className="font-mukta font-bold text-center mb-1"
          style={{ color: "#D4A69E" }}
        >
          Location
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutch-white hover:bg-sage font-black"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default CreateEvent;
