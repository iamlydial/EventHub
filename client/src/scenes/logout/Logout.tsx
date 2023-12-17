import React from "react";
import ThankYouImage from "../../assets/images/vika-fleysher-mJuiGg87f-Y-unsplash.jpg";

type Props = {};

const Logout = (props: Props) => {
  return (
    <div className="pt-18 flex flex-col lg:flex-row lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-28  gap-y-10 pt-40">
        <h1 className="font-mukta items-center text-onyx text-4xl font-bold leading-loose">
          You have been <br /> successfully logged out.
        </h1>
        <h2 className="font-mukta ">Thank you for visiting EventHub!</h2>
      </div>
      {/* Hide the image on small screens (sm and smaller) */}
      <div className="flex-col w-full lg:w-6/12 pt-10">
        <img
          className="max-lg:hidden bg-cover h-screen"
          src={ThankYouImage}
          alt="Logout"
        />
      </div>
    </div>
  );
};

export default Logout;
