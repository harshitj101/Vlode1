import { useState } from "react";
import LabelledInput from "../components/LabelledInput";
import { SignupInputs } from "@garvit__nmps/zod-common";
import AuthCard from "../components/AuthCard";
import Quote from "../components/Quote";
import axios from "axios";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<SignupInputs>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Send signup request to backend
  const signupRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/user/signup`,
        input
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      setLoading(false);
      navigate("/home"); // navigate to home page
    } catch (e) {
      setLoading(false);
      // alert the user about req fail
      toast.error("couldn't complete your request");
    }
  };

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signupRequest();
  };
  return (
    <div className="h-screen flex w-4/5 lg:grid lg:grid-cols-2 lg:gap-8 justify-center items-center font-popins lg:w-full overflow-hidden">
      <Quote />
      <AuthCard
        heading={"Create an account"}
        subHeading={"Already have an Account!"}
        link={"signin"}
        buttonText={"Sign up"}
        handleSubmit={handleSubmit}
        loading={loading}
      >
        <LabelledInput
          type="text"
          label="Name"
          placeholder="John"
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
        />
        <LabelledInput
          type="email"
          label="Email"
          placeholder="your@mail.com"
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
        />
        <LabelledInput
          type="password"
          label="Password"
          placeholder="password"
          onChange={(e) => {
            setInput({ ...input, password: e.target.value });
          }}
        />
      </AuthCard>
    </div>
  );
};
export default Signup;
