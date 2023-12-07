import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Date = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const numericPattern = /^[0-9]*$/;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    if (!date || !time || !duration) {
      alert("Please fill in all information before proceeding.");
      return;
    }

    navigate("/occasion-confirmed");
  };

  return (
    <div className="relative pt-20 flex flex-col items-center justify-center h-screen">
      <h3
        className="absolute top-20 left-4 font-mukta font-bold text-center mt-4"
        style={{ color: "#D4A69E" }}
      >
        Date and Time
      </h3>

      <ul className="text-center mb-8 mt-4">
        <li>
          <h3 className="font-mukta mb-4">
            Click on a tab to enter your date and time
          </h3>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <input
          type="date"
          placeholder="Date"
          className="flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          placeholder="Time"
          className="flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Duration - Hours"
          className="flex items-center justify-center h-28 px-8 bg-sage rounded-md text-gray-800"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className="absolute bottom-10 right-10 lg:right-10 flex flex-col items-center">
        <p
          className="font-mukta font-bold text-center mb-1"
          style={{ color: "#D4A69E" }}
        >
          Confirmation
        </p>
        <button
          className="w-36 rounded-md p-2 font-roboto bg-dutch-white hover:bg-sage font-black"
          onClick={handleNextClick}
        >
          Finish
        </button>
      </div>
      <div className="absolute bottom-10 left-10 lg:left-10 flex flex-col items-center">
        <p
          className="font-mukta font-bold text-center mb-1"
          style={{ color: "#D4A69E" }}
        >
          Theme
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

export default Date;
