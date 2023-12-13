import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Catering = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    if (selectedOption.length !== 3) {
      alert("Please select three catering types.");
      return;
    }

    console.log("Selected Catering:", selectedOption);
    navigate("/theme");
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption.includes(option)) {
      setSelectedOption((prevSelected) =>
        prevSelected.filter((selected) => selected !== option)
      );
    } else {
      if (selectedOption.length < 3) {
        setSelectedOption((prevSelected) => [...prevSelected, option]);
      } else {
        alert("You can only select three catering types.");
      }
    }
  };

  return (
    <div className="relative pt-20 flex flex-col items-center justify-center h-screen">
      <h3
        className="absolute top-20 left-4 font-mukta font-bold text-center mt-4"
        style={{ color: "#D4A69E" }}
      >
        Catering
      </h3>

      <ul className="text-center mb-8 mt-4">
        <li>
          <h3 className="font-mukta mb-4">
            Click on three tabs to choose your catering type
          </h3>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-6 mt-2">
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Cold Food") ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Cold Food")}
        >
          Cold Food
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Hot Food") ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Hot Food")}
        >
          Hot Food
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Soft Drinks") ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Soft Drinks")}
        >
          Soft Drinks
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Alcohol & Mocktails")
              ? "ring-4 ring-blue-500"
              : ""
          }`}
          onClick={() => handleOptionClick("Alcohol & Mocktails")}
        >
          Alcohol & Mocktails
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Cakes") ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => handleOptionClick("Cakes")}
        >
          Cakes
        </button>
        <button
          className={`flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800 ${
            selectedOption.includes("Sweets/Pastries")
              ? "ring-4 ring-blue-500"
              : ""
          }`}
          onClick={() => handleOptionClick("Sweets/Pastries")}
        >
          Sweets/Pastries
        </button>
      </div>
      <div className="absolute bottom-10 right-10 lg:right-10 flex flex-col items-center">
        <p
          className="font-mukta font-bold text-center mb-1"
          style={{ color: "#D4A69E" }}
        >
          Theme
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutch-white hover:bg-sage font-black"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <div className="absolute bottom-10 left-10 lg:left-10 flex flex-col items-center">
        <p
          className="font-mukta font-bold text-center mb-1"
          style={{ color: "#D4A69E" }}
        >
          Location
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutch-white hover:bg-sage font-black"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Catering;
