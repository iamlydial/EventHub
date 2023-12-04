import React, { useState, ChangeEvent, FormEvent } from "react";
import loginImage2 from "../../assets/images/tuva-mathilde-loland-7hhn4SmbnT8-unsplash 1.png";
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
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  return (
    <div className="pt-20 flex flex-col lg:flex-row h- lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-20 gap-y-10">
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
            className=" bg-dutch-white hover:bg-rosy-brown hover:text-black p-3 rounded-md text-white font-roboto"
          >
            LOGIN
          </button>
        </form>
      </div>
      {/* Hide the image on small screens (sm and smaller) */}
      <div className="flex-col w-full lg:w-6/12">
        <img className="max-lg:hidden" src={loginImage2} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
