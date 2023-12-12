import React from "react";
import { Link } from 'react-router-dom';
import Button from "../AccountInformation/Buttons/button";
import image1 from "../../GalleryComponent/image1.jpg"
import image2 from "../../GalleryComponent/image2.jpg";
import image3 from "../../GalleryComponent/image3.jpg";
import image4 from "../../GalleryComponent/image4.jpg";
import image5 from "../../GalleryComponent/image5.jpg";
import image6 from "../../GalleryComponent/image6.jpg";
import image7 from "../../GalleryComponent/image7.jpg";
import image8 from "../../GalleryComponent/image8.jpg";
// import image8 from "../../assets/images/GalleryComponent/image8.jpg";
import ianSchneiderPAykYb8Er8Unsplash from "../../assets/images/ian-schneider-PAykYb-8Er8-unsplash.jpg";

const GalleryComponent: React.FC = () => {
  const imagesList = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 4" },
    { id: 5, src: image5, alt: "Image 5" },
    { id: 6, src: image6, alt: "Image 6" },
    { id: 7, src: image7, alt: "Image 7" },
    { id: 8, src: image8, alt: "Image 8" },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">      
    <img src={ianSchneiderPAykYb8Er8Unsplash} alt="" className="w-full h-72 object-cover bg-fixed z-0 pt-9 mt-20 mb-5" />
      <div className="gHeading bg-cover bg-no-repeat h-3/4">
      <div className="z-10 relative">
        <h1 className="gTitle text-center text-9xl text-onyx font-bold">Gallery</h1>
        <p className="gStrapLine text-center text-2xl text-onyx p-5">
          Here is a taste of what one of your events could look like
        </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-5 mx-4">
        {imagesList.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="w-full rounded-md"
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/create-event">
          <Button text="Create Your Event" />
        </Link>
      </div>
    </div>
  );
};

export default GalleryComponent;

