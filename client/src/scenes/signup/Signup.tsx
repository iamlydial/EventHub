import React from "react";
import loginImage from "../../assets/images/marc-babin-aQWmCH_b3MU-unsplash 1.png";

const Signup: React.FC = () => {
  return (
    <div className="pt-20 flex flex-col lg:flex-row lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-20 gap-y-1">
        <h1 className="font-mukta items-center text-onyx text-4xl font-bold">
          Create<br></br> an account
        </h1>

        <form className="flex flex-col gap-5 w-full lg:w-8/12">
          <input
            placeholder="Email"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          <input
            placeholder="Password"
            className=" border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          <input
            placeholder="Retype Password"
            className="  border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          <div className="flex text-onyx flex-row gap-5 items-center">
            <input type="checkbox" className="h-7 w-7" />
            <p className="font-roboto">
              I accept{" "}
              <span className="font-roboto underline font-extrabold">
                Privacy
              </span>{" "}
              and{" "}
              <span className="font-roboto undeline underline font-extrabold">
                Terms & Conditions
              </span>
            </p>
          </div>
          <button className=" bg-dutch-white hover:bg-rosy-brown hover:text-black p-3 rounded-md text-white font-roboto">
            SIGN UP
          </button>
        </form>
      </div>
      <div className="flex-col w-full lg:w-6/12">
        <img className="max-lg:hidden" src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Signup;
