import { motion, AnimatePresence } from "framer-motion";
import { Loader, Send, Eye, X } from "lucide-react";
import { createPortal } from "react-dom";

interface WriteModalProps {
  isOpen: boolean;
  loading: boolean;
  showPreview: boolean;
  newBlog: { title: string; content: string };
  wordCount: number;
  estimatedReadTime: number;
  closeModal: () => void;
  setShowPreview: (show: boolean) => void;
  setNewBlog: (blog: { title: string; content: string }) => void;
  postBlog: () => void;
}

export const WriteModal = ({
  isOpen,
  loading,
  showPreview,
  newBlog,
  wordCount,
  estimatedReadTime,
  closeModal,
  setShowPreview,
  setNewBlog,
  postBlog,
}: WriteModalProps) => {
  // Modal content
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div onClick={closeModal} className="absolute inset-0 bg-black/50" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden z-[10000]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-darkGray font-popins">
                {showPreview ? "Preview Story" : "Write Story"}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className={`px-3 py-1 text-sm rounded ${
                    showPreview
                      ? "bg-darkGray text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  } transition-colors`}
                >
                  <Eye className="w-4 h-4 inline mr-1" />
                  Preview
                </button>
                <button
                  onClick={closeModal}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {!showPreview ? (
                /* Write Mode */
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={newBlog.title}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                      placeholder="Story title..."
                      className="w-full px-3 py-2 text-lg font-medium border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-darkGray focus:border-transparent"
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <textarea
                      value={newBlog.content}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, content: e.target.value })
                      }
                      placeholder="Write your story..."
                      className="w-full h-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-darkGray focus:border-transparent resize-none"
                    />
                  </div>

                  {wordCount > 0 && (
                    <div className="text-sm text-gray-500">
                      {wordCount} words • ~{estimatedReadTime} min read
                    </div>
                  )}
                </div>
              ) : (
                /* Preview Mode */
                <div className="space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold text-darkGray mb-2">
                      {newBlog.title || "Untitled Story"}
                    </h1>
                    <div className="text-sm text-gray-500 mb-4">
                      {wordCount} words • ~{estimatedReadTime} min read
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {newBlog.content ||
                        "Your story content will appear here..."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={postBlog}
                disabled={
                  loading || !newBlog.title.trim() || !newBlog.content.trim()
                }
                className="flex items-center space-x-2 px-4 py-2 bg-darkGray text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-darkGray disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>{loading ? "Publishing..." : "Publish"}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};
