import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Carousel } from 'flowbite-react';
type Props = {};

const Home: React.FC<Props> = () => {
  const [backendData, setBackendData] = useState<{ users?: string[] }>({});

  useEffect(() => {
    fetch("/api") // Assumes your React app and server are running on the same origin
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-20">
      <div className="bg-[url('assets/images/al-elmes-ULHxWq8reao-unsplash.jpg')] bg-fixed bg-cover p-40 h-auto">
      <h1 className="text-8xl text-white text-center font-mukta font-bold p-5 ">Curate your perfect Event with EventHub</h1>
      <p className="font-roboto text-white text-4xl text-center p-3">EventHub facilitates the planning and organization of various events for your peace of mind.<br />
        We aim to streamline the event booking process for different occasions like bridal showers, birthdays, and baby showers.
      </p>
      <div className="flex items-center justify-center m-5">
        <Link to="/login"><button type="button" className="focus:outline-none text-white hover:text-onyx bg-dutchWhite font-large rounded-lg text-2xl px-5 py-2.5 me-2 mb-5 items-center justify-center">Get Started</button></Link>
        <Link to="/services"><button type="button" className="focus:outline-none text-white hover:text-onyx bg-dutchWhite font-large rounded-lg text-2xl px-5 py-2.5 me-2 mb-5 mx-5 items-center justify-center">Learn More</button></Link>
      </div>
      </div>
      
      <div className="flex-grow border-t-2 border-onyx mb-5 border-opacity-10"></div>
      <h1 className="text-4xl text-onyx text-center font-roboto p-5">Previous events by EventHub</h1>

      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="flex h-72 w-96">
          <Carousel slideInterval={4000} pauseOnHover>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Image 1" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Image 2" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Image 3" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Image 4" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Image 5" />
          </Carousel>
        </div>
      </div>
      <div className="flex-grow border-t-2 border-onyx mb-5 border-opacity-10"></div>
      {/*   
      {typeof backendData.users === "undefined" ? (
        <p></p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )} */}
    </div>
  );
};

export default Home;
