import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { visitToken } from "../config";

interface AuthCardTypes {
  heading: string;
  subHeading: string;
  link: string;
  buttonText: string;
  handleSubmit: any;
  loading: boolean;
  children: React.ReactNode; // can have functional components as an input
}

const AuthCard = ({
  heading,
  subHeading,
  link,
  buttonText,
  handleSubmit,
  loading,
  children,
}: AuthCardTypes) => {
  const navigate = useNavigate();

  // function to take visitor recruiter direct in without login/signup
  const takeMeIn = () => {
    localStorage.setItem("token", visitToken);
    navigate("/home");
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full justify-center items-center gap-8 my-4 "
      onSubmit={handleSubmit}
    >
      <div className="w-full font-popins">
        <div className="text-3xl text-center">{heading}</div>
        <div className="text-sm text-center text-mediumGray">
          {subHeading}
          <Link
            to={`/${link}`}
            className="underline pl-1 hover:text-darkGray transition-all ease-in-out duration-500"
          >
            {link}
          </Link>
        </div>
      </div>
      {children}

      <button
        className="hover:bg-black flex justify-center bg-darkGray transition-all ease-in-out duration-500 text-white px-4 py-2 w-1/2 md:px-6 md:my-2 font-semibold rounded-full"
        type="submit"
      >
        {loading ? <Loader className=" animate-spin-slow " /> : buttonText}
      </button>
      <button
        className="bg-transparent text-sm text-darkGray hover:text-black underline duration-200 ease"
        onClick={takeMeIn}
      >
        I am a Visitor/Recruiter take me in
      </button>
    </motion.form>
  );
};
export default AuthCard;
