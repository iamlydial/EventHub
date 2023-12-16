import React from "react";
import glitterGlass from "../../GalleryComponent/glitterGlass.jpg"

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="pt-18  flex flex-col lg:flex-row h- lg:h-screen">
      <div
        className="p-10 w-full gridContainer bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${glitterGlass})` }}
      
      >
        <div className="flex flex-col lg:flex-row bg-gray-300 w-full rounded-md h-auto p-20 mt-20 gap-x-10 opacity-80">
          <div className="flex lg:flex-col justify-center w-full lg:w-4/12">
            <p className="flex flex-row pb-5 leading-loose font-roboto lg:text-2xl">
              Our Amazing Event Team is ready to help you anytime. Just fill in
              this form and we will be in contact soon!
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-8/12">
            <form className="">
              <div className="">
                <div className="grid lg:grid-cols-2 gap-5 pb-5 flex-row">
                  <input className="p-2 rounded-md" placeholder="First Name" />
                  <input className="p-2 rounded-md" placeholder="Last Name" />
                  <input
                    className="p-2 rounded-md"
                    type=""
                    placeholder="Phone Number"
                  />
                  <input
                    className="p-2 rounded-md"
                    type=""
                    placeholder="Email Address"
                  />
                </div>

                <input
                  className="h-24 p-2 rounded-md w-full"
                  type=""
                  placeholder="Message"
                />
                <div className="pt-10 flex flex-row justify-center">
                  <button className="w-full lg:w-4/12 rounded-md p-2 font-roboto bg-dutchWhite hover:bg-sage font-black">
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
