import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import loginImage from "../../assets/images/marc-babin-aQWmCH_b3MU-unsplash 1.png";
import { useNavigate } from "react-router-dom";
import validation from "./SignupValidation";
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone_number: string; // Adding telephone field to FormValues interface
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  telephone_number?: string; // Adding telephone field to FormErrors interface
}

const Signup: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    telephone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // Remove the square brackets around event.target.value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    // Wait for state to update, then check for errors
    setTimeout(() => {
      if (
        !Object.values(validationErrors).some(
          (error) => error !== undefined && error !== ""
        )
      ) {
        axios
          .post("/auth/signup", values)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              navigate("/login"); // Redirect to the login page
            }
          })
          .catch((err) => console.log(err));
      }
    }, 0);
  };

  return (
    <div className="pt-18 flex flex-col lg:flex-row lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-20 gap-y-1">
        <h1 className="font-mukta items-center text-onyx text-4xl font-bold">
          Create<br></br> an account
        </h1>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-8/12"
        >
          <input
            placeholder="Name"
            onChange={handleInput}
            name="name"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <input
            placeholder="Telephone"
            onChange={handleInput}
            name="telephone"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.telephone_number && (
            <span className="text-red-500">{errors.telephone_number}</span>
          )}
          <input
            placeholder="Email"
            onChange={handleInput}
            name="email"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <input
            placeholder="Password"
            type="password"
            onChange={handleInput}
            name="password"
            className=" border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <input
            placeholder="Retype Password"
            onChange={handleInput}
            name="confirmPassword"
            type="password"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
          <button
            type="submit"
            className=" bg-dutchWhite hover:bg-rosyBrown hover:text-black p-3 rounded-md text-white font-roboto"
          >
            SIGN UP
          </button>
        </form>
        <a href="/login">Already have an account? Log In</a>
      </div>
      <div className="flex-col w-full lg:w-6/12 pt-10">
        <img className="max-lg:hidden" src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Signup;
