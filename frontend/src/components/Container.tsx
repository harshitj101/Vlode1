import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { Skeleton } from "./Skeleton";
import { DropDown } from "./DropDown";
import Footer from "./Footer";
import { TrendingUp, Filter } from "lucide-react";

const Container = () => {
  const { loading, blogs } = useBlogs();

  // To check if the user is Logged in.
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lightBeige to-white">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-darkGray to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="font-popins text-2xl font-bold text-darkGray mb-2">
            Welcome to Vlode
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access your personalized feed and start reading
            amazing stories.
          </p>
          <Link
            to={"/signin"}
            className="inline-flex items-center px-6 py-3 bg-darkGray text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  // Function to give date a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBeige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darkGray mb-4">
            Discover Amazing Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a world of ideas, insights, and inspiration from writers
            around the globe.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Write Blog Section */}
            <div className="sticky top-24">
              <DropDown />
            </div>

            {/* Trending Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-darkGray" />
                <h2 className="font-semibold text-darkGray">Trending Topics</h2>
              </div>
              <div className="space-y-2">
                {[
                  "Technology",
                  "Lifestyle",
                  "Business",
                  "Health",
                  "Travel",
                ].map((topic) => (
                  <button
                    key={topic}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-darkGray hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-darkGray mb-4">
                Your Activity
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Stories Read</span>
                  <span className="font-semibold text-darkGray">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Articles Liked</span>
                  <span className="font-semibold text-darkGray">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Following</span>
                  <span className="font-semibold text-darkGray">24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-darkGray">
                  Latest Stories
                </h2>
                <span className="px-3 py-1 bg-darkGray text-white text-sm rounded-full">
                  {blogs.length} articles
                </span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-darkGray border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {loading
                ? // Create an array of length 6 and map over it to render 6 Skeleton components
                  Array(6)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} />)
                : blogs.map((blog) => (
                    <BlogCard
                      id={blog.id}
                      key={blog.id}
                      title={blog.title}
                      content={blog.content}
                      published={formatDate(blog.published)}
                      author={blog.author.name}
                    />
                  ))}
            </div>

            {/* Load More Button */}
            {!loading && blogs.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border-2 border-darkGray text-darkGray font-medium rounded-full hover:bg-darkGray hover:text-white transition-all duration-200">
                  Load More Stories
                </button>
              </div>
            )}

            {/* Empty State */}
            {!loading && blogs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No stories yet
                </h3>
                <p className="text-gray-500">
                  Be the first to share a story with the community!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
