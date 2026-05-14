import {
  User,
  Calendar,
  Edit3,
  BarChart3,
  Eye,
  Heart,
  Share2,
  Settings,
} from "lucide-react";
import { useUserDetails } from "../hooks";
import { BlogCard } from "../components/BlogCard";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { UserPageSkeleton } from "../components/Skeleton";
import { useState } from "react";

const UserPage = () => {
  const { userDetails, posts } = useUserDetails();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("published");

  // Function to give date a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function for user Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logged out successfully!");
  };

  if (!userDetails) {
    return <UserPageSkeleton />;
  }

  // Default join date since userDetails doesn't have createdAt field
  const joinDate = "Jan 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBeige to-white">
      {/* Cover Photo Area */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-darkGray via-gray-700 to-darkGray">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-end justify-between">
            <div className="flex items-end space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-darkGray to-gray-600 flex items-center justify-center">
                    <User className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Edit3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* User Info */}
              <div className="pb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {userDetails.name}
                </h1>
                <p className="text-gray-300 mb-2">{userDetails.email}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Member since {joinDate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-darkGray">
                  {posts.length}
                </p>
                <p className="text-sm text-gray-600">Stories</p>
              </div>
              <Edit3 className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-darkGray">1.2K</p>
                <p className="text-sm text-gray-600">Views</p>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-darkGray">89</p>
                <p className="text-sm text-gray-600">Likes</p>
              </div>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-darkGray">156</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: "published", label: "Published", count: posts.length },
                { key: "drafts", label: "Drafts", count: 0 },
                { key: "liked", label: "Liked", count: 12 },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? "border-darkGray text-darkGray"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "published" && (
              <>
                {posts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((blog) => (
                      <BlogCard
                        id={blog.id}
                        key={blog.id}
                        title={blog.title}
                        content={blog.content}
                        published={formatDate(blog.published)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Edit3 className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No stories yet
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Start writing your first story to share with the world!
                    </p>
                    <Link
                      to="/home"
                      className="inline-flex items-center px-6 py-3 bg-darkGray text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Write Story
                    </Link>
                  </div>
                )}
              </>
            )}

            {activeTab === "drafts" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit3 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No drafts
                </h3>
                <p className="text-gray-500">
                  Your unpublished stories will appear here.
                </p>
              </div>
            )}

            {activeTab === "liked" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No liked stories
                </h3>
                <p className="text-gray-500">
                  Stories you like will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-darkGray mb-4">
            Quick Actions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/home"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-darkGray hover:bg-gray-50 transition-colors"
            >
              <Edit3 className="w-5 h-5 text-darkGray" />
              <span className="font-medium text-darkGray">Write New Story</span>
            </Link>

            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-darkGray hover:bg-gray-50 transition-colors">
              <BarChart3 className="w-5 h-5 text-darkGray" />
              <span className="font-medium text-darkGray">View Analytics</span>
            </button>

            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-darkGray hover:bg-gray-50 transition-colors">
              <Share2 className="w-5 h-5 text-darkGray" />
              <span className="font-medium text-darkGray">Share Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
