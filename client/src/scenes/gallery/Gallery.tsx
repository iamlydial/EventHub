import React from "react";
import { Link } from 'react-router-dom';
import '../gallery/Gallery.css';
import Button from "../AccountInformation/Buttons/button";
import image1 from "../../assets/images/GalleryComponent/image1.jpg";
import image2 from "../../assets/images/GalleryComponent/image2.jpg";
import image3 from "../../assets/images/GalleryComponent/image3.jpg";
import image4 from "../../assets/images/GalleryComponent/image4.jpg";
import image5 from "../../assets/images/GalleryComponent/image5.jpg";
import image6 from "../../assets/images/GalleryComponent/image6.jpg";
import image7 from "../../assets/images/GalleryComponent/image7.jpg";
import image8 from "../../assets/images/GalleryComponent/image8.jpg";



// type Props = {};

 const GalleryComponent = () => { 
   const imagesList = [
     {
       id: 1,
       src: image1,
       alt: "Image 1",
    },
    {
    id: 2,
    src: image2,
    alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      },
      {
        id: 4,
        src: image4,
        alt: "Image 4",
        },
        {
          id: 5,
          src: image5,
          alt: "Image 5",
          },
          {
            id: 6,
            src: image6,
            alt: "Image 6",
            },
            {
              id: 7,
              src: image7,
              alt: "Image 7",
              },
              {
                id: 8,
                src: image8,
                alt: "Image 8",
                },
                
   ];

   const imageStyles = {
    width: '48%', 
    height: '60%', 
    display: 'inline-block',
    borderRadius: '50%',
  };

    return (
      
      <div>
        <div className="gHeading">
        <h1 className="gTitle">Gallery</h1>
       <p className="gStrapLine">Here is a taste of what one your of your events could look like</p>
       </div>
        {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} style={imageStyles}/>
        ))}
        <Link to="/createevent">
       <Button text="Click to Create Your Event" />
    </Link>
        </div>
        
      );
    };
      

export default GalleryComponent;







