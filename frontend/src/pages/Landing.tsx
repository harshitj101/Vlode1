import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { BookOpen, Users, Lightbulb, Heart } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };

  const features = [
    {
      icon: BookOpen,
      title: "Read & Discover",
      description:
        "Explore innovative ideas and inspiring stories from creators worldwide",
    },
    {
      icon: Users,
      title: "Share & Connect",
      description:
        "Join a community of thinkers and share your unique perspectives",
    },
    {
      icon: Lightbulb,
      title: "Inspire & Create",
      description:
        "Turn your thoughts into impactful stories that inspire others",
    },
    {
      icon: Heart,
      title: "Reflect & Grow",
      description:
        "Engage with content that challenges and expands your worldview",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col w-11/12 md:w-3/4 mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-4 md:py-6 flex justify-between border-b border-black font-popins">
          <p className="text-2xl md:text-3xl text-darkGray font-Pacifico">
            Vlode
          </p>
          <div className="inline-flex items-baseline text-sm text-mediumGray gap-3 md:gap-6">
            <a
              href="https://handy-antique-370.notion.site/Project-Journal-Vlode-11eb447e1380801a9a21efb807b93c79"
              target="_blank"
              className="hover:text-darkGray hidden md:inline transition-all ease-in-out duration-500"
            >
              About
            </a>
            <Link
              to="/signin"
              className="hover:text-darkGray transition-all ease-in-out duration-500"
            >
              Signin
            </Link>
            <button
              onClick={navigateToSignup}
              className="bg-darkGray hover:bg-black py-2 px-3 md:px-4 transition-all ease-in-out duration-500 text-white tracking-tighter rounded-full font-semibold text-xs md:text-sm"
            >
              Get started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex items-center py-12 md:py-20"
      >
        <div className="w-full md:w-4/5 lg:w-3/5 font-popins">
          <h2 className="text-6xl lg:text-8xl text-darkGray leading-tight mb-6">
            Innovation Paths & Reflections
          </h2>
          <h3 className="text-mediumGray text-base md:text-lg lg:text-xl tracking-tighter mb-8 md:mb-10">
            A Hub for Reading, Sharing & Inspiring Ideas!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={navigateToSignup}
              className="hover:bg-black bg-darkGray transition-all ease-in-out duration-500 text-white px-6 py-3 md:px-8 md:py-3 font-semibold rounded-full text-sm md:text-base"
            >
              Start Reading
            </button>
            <button
              onClick={navigateToSignup}
              className="border-2 border-darkGray hover:bg-darkGray hover:text-white text-darkGray transition-all ease-in-out duration-500 px-6 py-3 md:px-8 md:py-3 font-semibold rounded-full text-sm md:text-base"
            >
              Write Your Story
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-16 md:py-24"
      >
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-2xl md:text-3xl font-semibold text-darkGray mb-4 font-popins">
            Why Choose Vlode?
          </h4>
          <p className="text-mediumGray text-lg max-w-2xl mx-auto">
            Join thousands of creators and readers in a space designed for
            meaningful content and genuine connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-darkGray rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-darkGray mb-2 font-popins">
                  {feature.title}
                </h5>
                <p className="text-mediumGray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-16 md:py-20 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-semibold text-darkGray mb-4 font-popins">
            Ready to Start Your Journey?
          </h4>
          <p className="text-mediumGray text-lg mb-8 md:mb-10">
            Whether you're here to discover fresh perspectives or share your own
            unique voice, Vlode provides the perfect platform for meaningful
            content creation and consumption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToSignup}
              className="hover:bg-black bg-darkGray transition-all ease-in-out duration-500 text-white px-8 py-4 font-semibold rounded-full text-base"
            >
              Join Our Community
            </button>
            <Link
              to="/signin"
              className="border-2 border-darkGray hover:bg-darkGray hover:text-white text-darkGray transition-all ease-in-out duration-500 px-8 py-4 font-semibold rounded-full text-base inline-block"
            >
              Sign In
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};
export default Landing;
