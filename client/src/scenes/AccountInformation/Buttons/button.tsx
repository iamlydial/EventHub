import React from "react";


interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: "20%", height: "8vh", textAlign: "center", marginBottom: "5%", fontSize: "15px" }}
      className="bg-onyx hover:bg-hoverBg hover:text-white text-white font-bold py-1 px-1 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
