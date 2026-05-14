import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config";

// Blog types
interface Blog {
  id: number;
  title: string;
  content: string;
  published: string;
  author: {
    name: string;
  };
}
interface User {
  name: string;
  email: string;
  posts: object;
}
interface Posts {
  id: number;
  title: string;
  content: string;
  published: string;
}
// Hook to fetch blogs from the backend
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};

// hook to fetch a single blog from backend
export const useSingleBlog = (id: number) => {
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/key/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
      });
  }, []);
  return {
    blog,
  };
};

// Hook to get details about user

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState<User>();
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/user`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserDetails(response.data.userDetails);
        setPosts(response.data.userDetails.posts);
      });
  }, []);
  return {
    userDetails,
    posts,
  };
};
