import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import UserPage from "./pages/User";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#242424",
              color: "#fff",
              borderRadius: "12px",
              fontFamily: "Poppins, sans-serif",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
