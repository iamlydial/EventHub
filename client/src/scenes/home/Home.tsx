import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsLoggedIn, selectUserData } from "../../redux/userSlice";
type Props = {};



const Home: React.FC<Props> = () => {
  const [backendData, setBackendData] = useState<{ users?: string[] }>({});

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  console.log(selectIsLoggedIn);
  console.log(isLoggedIn, "isLoggedIn");
  console.log(userData?.user?.name, "userData");


  // useEffect(() => {
  //   fetch("/api") // Assumes your React app and server are running on the same origin
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(state.user);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div className="mt-20">
      <div className="bg-[url('https://images.unsplash.com/photo-1534768368122-aa9bbb3a8d62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhc3RlbCUyMHBhcnR5fGVufDB8fDB8fHwy')] bg-fixed bg-cover p-40 h-auto">
        <h1 className="text-8xl text-white text-center font-mukta font-bold p-5 ">
          {userData?.user?.name} Curate your perfect Event with EventHub
        </h1>
        <p className="font-roboto text-white text-4xl text-center p-3">
          EventHub facilitates the planning and organization of various events
          for your peace of mind.
          <br />
          We aim to streamline the event booking process for different occasions
          like bridal showers, birthdays, and baby showers.
        </p>
        <div className="flex items-center justify-center m-5">
          <Link to="/login">
            <button
              type="button"
              className="focus:outline-none text-white hover:text-onyx bg-dutchWhite font-large rounded-lg text-2xl px-5 py-2.5 me-2 mb-5 items-center justify-center"
            >
              Get Started
            </button>
          </Link>
          <Link to="/services">
            <button
              type="button"
              className="focus:outline-none text-white hover:text-onyx bg-dutchWhite font-large rounded-lg text-2xl px-5 py-2.5 me-2 mb-5 mx-5 items-center justify-center"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-grow border-t-2 border-onyx mb-5 border-opacity-10"></div>
      <h1 className="text-4xl text-onyx text-center font-roboto p-5">
        Previous events by EventHub
      </h1>

      <div className="flex items-center justify-center mb-10">
        
        <div className="flex relative overflow-hidden h-52 w-96 rounded-lg sm:h-64 xl:h-80 2xl:h-96" >
          <Carousel slideInterval={4000} pauseOnHover>
            <img

              src={require("../../assets/images/al-elmes-ULHxWq8reao-unsplash.jpg")}
              alt="Wedding"
            />
            <img
              src={require("../../assets/images/Feature-Hens.jpg")}
              alt="Hen Do"
            />
            <img
              src={require("../../assets/images/Hen-party-ideas.jpg")}
              alt="Hen Do 2"
            />
            <img
              src={require("../../assets/images/dave-lastovskiy-RygIdTavhkQ-unsplash.jpg")}
              alt="Pouring Champagne"
            />
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
