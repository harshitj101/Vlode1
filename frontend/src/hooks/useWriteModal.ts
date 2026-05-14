import { CreateBlogInput } from "@garvit__nmps/zod-common";
import axios from "axios";
import { useState, useEffect } from "react";
import { backendUrl } from "../config";
import toast from "react-hot-toast";

export const useWriteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [newBlog, setNewBlog] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });

  const postBlog = async () => {
    if (!newBlog.title.trim() || !newBlog.content.trim()) {
      toast.error("Please fill in both title and content");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${backendUrl}/api/v1/blog`, newBlog, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setLoading(false);
      setNewBlog({ title: "", content: "" });
      setIsOpen(false);
      setShowPreview(false);
      toast.success("Story published successfully!");
      window.location.reload();
    } catch (e) {
      setLoading(false);
      toast.error("Failed to publish story");
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowPreview(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const wordCount = newBlog.content
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const estimatedReadTime = Math.ceil(wordCount / 200);

  return {
    isOpen,
    loading,
    showPreview,
    newBlog,
    wordCount,
    estimatedReadTime,
    openModal,
    closeModal,
    setShowPreview,
    setNewBlog,
    postBlog,
  };
};
