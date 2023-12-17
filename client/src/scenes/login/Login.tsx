import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import loginImage2 from "../../assets/images/tuva-mathilde-loland-7hhn4SmbnT8-unsplash 1.png";
import { loginUser } from "../../redux/userSlice";
import { setUser } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import validation from "./LoginValidation";

interface FormValues {
  email: string;
  password: string;
}
interface FormErrors {
  email?: string;
  password?: string;
}
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useAppDispatch();
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSignupNavigation = () => {
    navigate("/signup"); // Replace "/signup" with your signup page route
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validation(values);
    if (
      Object.values(validationErrors).some(
        (error) => error !== undefined && error !== ""
      )
    ) {
      // Handle validation errors here
      console.log("Validation errors occurred:", validationErrors);
      return;
    }
    try {
      console.log("Sending login request...");
      const response = await axios.post("/auth/login", values);
      const userData = response.data; // Extract the user data from the response
      if (userData) {
        console.log("Login successful. Response data:", userData);
        // Dispatch setUser action with the user data from the response

        dispatch(setUser(userData));


        

        // Set isLoggedIn in localStorage to true
        localStorage.setItem("isLoggedIn", "true");
        console.log("User data dispatched and isLoggedIn set in localStorage.");
        // Redirect user to the home page
        window.location.href = "/account-dashboard"; // Redirects to dashboard after login
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="pt-18 flex flex-col lg:flex-row lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-28  gap-y-10 pt-40">
        <h1 className="font-mukta items-center text-onyx text-4xl font-bold">
          Login
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-8/12"
        >
          <input
            placeholder="Email"
            onChange={handleInput}
            name="email"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            className=" border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <button
            type="submit"
            className="bg-dutchWhite hover:bg-rosyBrown hover:text-black p-3 rounded-md text-white font-roboto"
          >
            LOGIN
          </button>
          <p className="flex flex-row text-sm">
            If you dont'have an account, {""}
            <a href="/signup">
              <span className="underline"> sign up!</span>
            </a>
          </p>
        </form>
      </div>
      {/* Hide the image on small screens (sm and smaller) */}
      <div className="flex-col w-full lg:w-6/12 pt-10">
        <img className="max-lg:hidden" src={loginImage2} alt="Login" />
      </div>
    </div>
  );
};
export default Login;
