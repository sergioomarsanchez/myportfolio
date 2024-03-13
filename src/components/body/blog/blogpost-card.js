import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import "./blogpost-card.css";

function BlogpostCard({ blogpostData }) {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  return (
    <div className={isDark ? "blogPostCard" : "blogPostCard-light"}>
      <section className={isDark ? "text" : "text-light"}>
        <h2 className={isDark ? "title" : "title-light"}>
          {es ? blogpostData.title.es : blogpostData.title.en}
        </h2>
        <p className={isDark ? "description" : "description-light"}>
          {es ? blogpostData.description.es : blogpostData.description.en}
        </p>
      </section>
      <section className={isDark ? "imgContainer" : "imgContainer-light"}>
        <img
          alt={`logo of${blogpostData.title}`}
          src={blogpostData.img}
          style={{ aspectRatio: blogpostData.imgAR }}
          width={blogpostData.imgWidth}
          height={blogpostData.imgHeight}
          lazy
          className={isDark ? "blogPostImg" : "blogPostImg-light"}
        />
        <Link
          to={`/blog/${blogpostData.slug}`}
          style={{ textDecoration: "none" }}
        >
          <span className={isDark ? "link" : "link-light"}>
            {es ? "Leer más ->" : "Read more ->"}
          </span>
        </Link>
      </section>
    </div>
  );
}

export default BlogpostCard;
