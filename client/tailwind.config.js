/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        rosyBrown: "#DA9F93",
        nyanza: "#E1F4CB",
        sage: "#BACBA9",
        dutchWhite: "#e9dab2",
        onyx: "#393E41",
        hoverBg: "#464b4f",
        navigation: "#374151",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {},
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
