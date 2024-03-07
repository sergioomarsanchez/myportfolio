import React, { useContext, useEffect } from "react";
import "./blog.css";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import { BlogPostsData } from "../../data/blogPosts";
import BlogpostCard from "./blogpost-card";

function Blog() {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={isDark ? "blog" : "blog-light"}>
      <h1 className={isDark ? "blogTitle" : "blogTitle-light"}>Blog</h1>
      {BlogPostsData?.map((blogPost) => {
        return <BlogpostCard blogpostData={blogPost} />;
      })}
    </div>
  );
}

export default Blog;
