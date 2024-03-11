import { BlogPostsData } from "../../data/blogPosts";
import React, { useEffect, useState } from "react";

const useBlogPost = (slug) => {
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const selectedBlogpost = BlogPostsData.find(
          (post) => post.slug === slug
        );
        if (selectedBlogpost) {
          setBlogPost(selectedBlogpost);
        } else {
          throw new Error();
        }
      } catch (err) {
        setError({ message: "The post requested does not exist" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  return { blogPost, isLoading, error };
};

export default useBlogPost;
