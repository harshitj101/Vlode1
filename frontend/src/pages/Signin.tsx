import { useState } from "react";
import LabelledInput from "../components/LabelledInput";
import { SigninInput } from "@garvit__nmps/zod-common";
import Quote from "../components/Quote";
import AuthCard from "../components/AuthCard";
import axios from "axios";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signin = () => {
  const [input, setInput] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // To send signin request to backend
  const signinRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/user/signin`,
        input
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      setLoading(false);
      navigate("/home");
      toast.success("Logged in!");
    } catch (e) {
      setLoading(false);
      toast.error("User not found or incorrect password");
      // alert the user about req fail
    }
  };

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signinRequest();
  };

  return (
    <div className="h-screen flex w-4/5 lg:grid lg:grid-cols-2 lg:gap-8 justify-center items-center font-popins lg:w-full overflow-hidden">
      <AuthCard
        heading={"Login to Vlode"}
        subHeading={"Dont' have an Account!"}
        link={"signup"}
        buttonText={"Sign in"}
        handleSubmit={handleSubmit}
        loading={loading}
      >
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
      <Quote />
    </div>
  );
};
export default Signin;
