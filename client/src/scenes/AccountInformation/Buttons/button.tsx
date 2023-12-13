import React from "react";
import { Link } from 'react-router-dom';


interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: "30%", height: "10vh", textAlign: "center", marginLeft: "20px", fontSize: "15px", margin: "5%" }} //button styling for services page
      className="bg-onyx hover:bg-hoverBg hover:text-white text-white font-bold py-1 px-1 rounded"
    >
      {text}
      
    </button>
  );
};

export default Button;
