import React, { useContext, useEffect } from "react";
import "./blog.css";
import { ThemeContext, LangContext } from "../../../contexts/theme";


function Blog() {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog">
      <h1>Blog</h1>
    </div>
  );
}

export default About;
