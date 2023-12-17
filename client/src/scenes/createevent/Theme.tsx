import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import whiteballoons from "../../assets/images/whiteballoons.jpg";
import axios from "axios";

const Theme = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [themeOptions, setThemeOptions] = useState<string[]>([]);
  const [nextClicked, setNextClicked] = useState(false);

  useEffect(() => {
    // Fetch theme options for our frontend
    axios
      .get("/theme-options")
      .then((response) => {
        setThemeOptions(response.data.themeOptions);
      })
      .catch((error) => {
        console.error("Error fetching theme options:", error);
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
      alert("Please select a theme before proceeding.");
      return;
    }

    setNextClicked(true);

    axios
      .post("/choose-theme", { theme: selectedOption })
      .then((response) => {
        console.log(response.data.message);

        navigate("/date");
      })
      .catch((error) => {
        console.error("Error choosing theme:", error);
      });
  };

  useEffect(() => {
    if (nextClicked) {
      navigate("/date");
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
