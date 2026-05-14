import { useNavigate, useParams } from "react-router-dom";
import { useSingleBlog } from "../hooks";
import {
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  Clock,
  Eye,
  Calendar,
} from "lucide-react";
import { PageSkeleton } from "../components/Skeleton";
import { useState, useEffect } from "react";

const Blog = () => {
  const { id } = useParams();
  const { blog } = useSingleBlog(Number(id));
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Calculate reading progress on scroll
  useEffect(() => {
    const updateReadingProgress = () => {
      const articleElement = document.getElementById("article-content");
      if (articleElement) {
        const totalHeight = articleElement.scrollHeight - window.innerHeight;
        const progress = Math.min(
          100,
          Math.max(0, (window.scrollY / totalHeight) * 100)
        );
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, [blog]);

  const navigateBack = () => {
    navigate("/home");
  };

  // Function to give date a pretty format
  const formatDate: any = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Calculate estimated reading time
  const estimateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.content.slice(0, 100) + "...",
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Skeleton component
  if (!blog) {
    return <PageSkeleton />;
  }

  const readingTime = estimateReadingTime(blog.content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBeige to-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-darkGray transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={navigateBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-darkGray transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to stories</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-colors ${
                isLiked
                  ? "text-red-500 bg-red-50"
                  : "text-gray-400 hover:text-red-500 hover:bg-red-50"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked
                  ? "text-darkGray bg-gray-100"
                  : "text-gray-400 hover:text-darkGray hover:bg-gray-100"
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
              />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full text-gray-400 hover:text-darkGray hover:bg-gray-100 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article id="article-content" className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darkGray mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Author Info and Meta */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-darkGray to-gray-600 flex items-center justify-center ring-2 ring-white shadow-md">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-darkGray text-lg">
                  {blog.author.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blog.published)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{readingTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>1.2k views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <button className="px-6 py-2 bg-darkGray text-white rounded-full hover:bg-gray-700 transition-colors font-medium">
              Follow
            </button>
          </div>

          {/* Article Tags */}
          <div className="flex items-center space-x-2 mb-8">
            {["Technology", "Lifestyle"].map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lightBeige text-darkGray hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          {/* Engagement Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 transition-colors ${
                  isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                <span className="font-medium">42</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-darkGray transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.586-.377l-3.431 1.727a.996.996 0 01-1.449-.87V15.9A8 8 0 1121 12z"
                  />
                </svg>
                <span className="font-medium">12</span>
              </button>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium">Share</span>
            </button>
          </div>

          {/* Author Card */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-darkGray to-gray-600 flex items-center justify-center ring-2 ring-white shadow-md">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-darkGray mb-1">
                  {blog.author.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  Passionate writer sharing insights about technology and life.
                  Follow for more amazing stories and updates.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-darkGray text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    Follow
                  </button>
                  <span className="text-sm text-gray-500">156 followers</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Articles Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-darkGray mb-8">
          More from this author
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder for related articles */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-darkGray mb-2 hover:text-gray-700 cursor-pointer">
                Another Amazing Story You Might Like
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of another interesting article that readers
                might enjoy...
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>5 min read</span>
                <span>Dec 15, 2024</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
