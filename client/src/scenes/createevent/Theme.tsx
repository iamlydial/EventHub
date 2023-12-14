import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Theme = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      alert("Please select a theme before proceeding.");
      return;
    }

    console.log("Selected Theme:", selectedOption);
    navigate("/date");
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative pt-20 flex flex-col items-center justify-center h-screen bg-gray-300">
      <h3
        className="absolute top-24 left-4 font-bold text-center mt-12"
        style={{ color: "#D4A69E" }}
      >
        Theme
      </h3>

      <ul className="text-center mb-8 mt-4">
        <li>
          <h3 className="font-bold mb-4">
            Click on a tab to choose your theme
          </h3>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Elegant" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Elegant")}
        >
          Elegant
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Playful" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Playful")}
        >
          Playful
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Boho Chic" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Boho Chic")}
        >
          Boho Chic
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-gray-800 rounded-md text-sage ${
            selectedOption === "Casual" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Casual")}
        >
          Casual
        </button>
      </div>
      <div className="absolute bottom-10 right-10 lg:right-10 flex flex-col items-center">
        <p className="font-bold text-center mb-1" style={{ color: "#D4A69E" }}>
          Date
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
          Catering
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

export default Theme;
