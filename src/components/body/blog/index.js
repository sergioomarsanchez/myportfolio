import React, { useContext, useEffect } from "react";
import "./blog.css";
import { ThemeContext } from "../../../contexts/theme";
import { BlogPostsData } from "../../data/blogPosts";
import BlogpostCard from "./blogpost-card";

function Blog() {
  const [isDark] = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={isDark ? "blog" : "blog-light"}>
      <main className="blogContainer">
      <h1 className={isDark ? "blogTitle" : "blogTitle-light"}>Blog</h1>
      {BlogPostsData?.map((blogPost, idx) => {
        return <BlogpostCard key={idx} blogpostData={blogPost} />;
      })}
      </main>
    </div>
  );
}

export default Blog;
