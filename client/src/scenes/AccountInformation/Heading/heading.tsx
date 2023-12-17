import React , {useEffect, useState} from "react";
import axios from "axios";
import profilePicture from "../../../GalleryComponent/profilePicture.jpg"
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsLoggedIn, selectUserData } from "../../../redux/userSlice";
type Props = {};

const Heading: React.FC<Props> = () => {
  const [backendData, setBackendData] = useState<{ users?: string[] }>({});

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  console.log(selectIsLoggedIn);
  console.log(isLoggedIn, "isLoggedIn");
  console.log(userData?.name, "userData");
  const [loggedinUser, setLoggedinUser] = useState<Event[]>([]);

  useEffect(() => {
    axios.get("/dashboard/auth/signup/:id")
      .then(response => {
        console.log(response, "response");
        setLoggedinUser(response.data.events);
      })
      .catch(error => {
        console.error("Error fetching user events:", error);
      });
  }, []);
  

  return (
    <div className="flex items-center mt-10 pt-20">
      <h1 className="text-5xl text-gray-800 mr-16 ml-8 mb-10">Welcome {userData?.name} </h1> 
      <div className="ml-auto mr-10">
      </div>
    </div>
    
  );
};
export default Heading;

