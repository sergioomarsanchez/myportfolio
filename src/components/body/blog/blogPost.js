import React, { useContext, useEffect } from "react";
import Helmet from "react-helmet";
import "./blogPost.css";
import { useParams } from "react-router-dom";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import useBlogPost from "./useBlogPost";

function BlogPost() {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  const { slug } = useParams();
  const { blogPost, isLoading, error } = useBlogPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return (
      <div className={isDark ? "blog" : "blog-light"}>
        <h1 className={isDark ? "title" : "title-light"}>
          {es ? "Cargando..." : "Loading..."}
        </h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className={isDark ? "blog" : "blog-light"}>
        <h1 className={isDark ? "title" : "title-light"}>{error.message}</h1>
      </div>
    );
  }
  const contentArray = es ? blogPost?.html.es : blogPost?.html.en;

  return (
    <div className={isDark ? "blogPost" : "blogPost-light"}>
      <Helmet>
        <title>{es ? blogPost.title.es : blogPost.title.en}</title>
        <meta
          name="description"
          content={es ? blogPost.description.es : blogPost.description.en}
        />
        <meta
          name="keywords"
          content={
            es
              ? blogPost.keywords.es.join(", ")
              : blogPost.keywords.en.join(", ")
          }
        />
      </Helmet>
      <h1 className={isDark ? "title" : "title-light"}>
        {es ? blogPost.title.es : blogPost.title.en}
      </h1>
      <p className={isDark ? "description" : "description-light"}>
        {es ? blogPost.description.es : blogPost.description.en}
      </p>
      {Array.isArray(contentArray) ? (
        <div className={isDark ? "contentContainer" : "contentContainer-light"}>
          {contentArray?.map((element, idx) =>
            element.type === "html" ? (
              <div
                key={idx}
                dangerouslySetInnerHTML={{ __html: element.content }}
              />
            ) : (
              <pre key={idx} className="language-jsx">
                <code>{element.content}</code>
              </pre>
            )
          )}
        </div>
      ) : (
        <span className={isDark ? "title" : "title-light"}>
          {es ? "Cargando..." : "Loading..."}
        </span>
      )}
    </div>
  );
}

export default BlogPost;
