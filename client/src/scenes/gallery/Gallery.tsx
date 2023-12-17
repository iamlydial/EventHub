import React from "react";
import { Link } from "react-router-dom";
import Button from "../AccountInformation/Buttons/button";
import image1 from "../../GalleryComponent/image1.jpg";
import image2 from "../../GalleryComponent/image2.jpg";
import image3 from "../../GalleryComponent/image3.jpg";
import image4 from "../../GalleryComponent/image4.jpg";
import image5 from "../../GalleryComponent/image5.jpg";
import image6 from "../../GalleryComponent/image6.jpg";
import image7 from "../../GalleryComponent/image7.jpg";
import image8 from "../../GalleryComponent/image8.jpg";
import mainBgCover from "../../GalleryComponent/mainBgCover.jpg";

const GalleryComponent: React.FC = () => {
  const imagesList = [
    { id: 1, src: image1, alt: "Bridal Night Party" },
    { id: 2, src: image2, alt: "Bridal Day Party" },
    { id: 3, src: image3, alt: "Boy Baby Shower" },
    { id: 4, src: image4, alt: "Girl Baby Shower" },
    { id: 5, src: image5, alt: "Boys Birthday" },
    { id: 6, src: image6, alt: "Guys Night" },
    { id: 7, src: image7, alt: "Girls Birthday" },
    { id: 8, src: image8, alt: "Ladies Night" },
  ];

  return (
    <div>
      <div
        className="flex flex-col justify-between min-h-screen bg-cover bg center bg-no-repeat"
        style={{ backgroundImage: `url(${mainBgCover})` }}
      >
        <div className="gHeading bg-cover bg-no-repeat h-3/4">
          <div className="z-10 relative ml-10 mr-10 m-5 border-s-4">
            <h1 className="gTitle text-center mt-40 text-4xl text-onyx font-bold">
              Gallery
            </h1>
            <p className="gStrapLine text-center text-3xl text-onyx p-5">
              Here is a taste of what your event could look like. We create your
              dream event based on the package you curated through our Create
              Event Journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 mt-5 mx-4 PageBg">
          {imagesList.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full rounded-md h-58 p-6"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/create-event">
            <Button text="Create Your Event" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
