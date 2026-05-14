import { Link } from "react-router-dom";
import { User, Clock, Bookmark, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface blogTypes {
  id: number;
  title: string;
  content: string;
  author?: string;
  published: string;
}

// Blog card component
export const BlogCard = ({
  id,
  title,
  content,
  author,
  published,
}: blogTypes) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const truncatedTitle = title.length > 60 ? title.slice(0, 60) + "..." : title;
  const truncatedContent =
    content.length > 150 ? content.slice(0, 150) + "..." : content;

  // Calculate estimated reading time (average 200 words per minute)
  const estimateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  const readingTime = estimateReadingTime(content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Card Header */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-darkGray to-gray-600 flex items-center justify-center ring-2 ring-white shadow-md">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-darkGray group-hover:text-gray-700 transition-colors">
                {author || "Anonymous"}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{published}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bookmark button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsBookmarked(!isBookmarked);
            }}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked
                ? "text-darkGray bg-gray-100"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
            />
          </button>
        </div>

        {/* Title and Content */}
        <Link to={`/blog/${id}`} className="block group">
          <h2 className="text-xl font-bold text-darkGray group-hover:text-gray-700 transition-colors mb-3 leading-tight">
            {truncatedTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 font-popins">
            {truncatedContent}
          </p>
        </Link>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {/* Like button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className={`flex items-center space-x-1 transition-colors ${
                isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="text-sm">12</span>
            </button>

            {/* Category tag */}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-lightBeige text-darkGray">
              Article
            </span>
          </div>

          {/* Read more link */}
          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center text-sm font-medium text-darkGray hover:text-gray-700 transition-colors group-hover:translate-x-1 transform duration-200"
          >
            Read article
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
