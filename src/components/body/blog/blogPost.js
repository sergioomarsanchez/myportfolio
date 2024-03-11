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
  const htmlToAdd = es ? blogPost?.html.es : blogPost?.html.en;
  const processContentWithPreTags = (content) => {
    const parts = [];

    // Base case for empty string
    if (!content.length) {
      return parts;
    }

    // Base case for single <pre> tag (start or end)
    if (content.startsWith("<pre>") && content.endsWith("</pre>")) {
      parts.push({ type: "pre", content: content.slice(5, -6) }); // Extract pre content
      return parts;
    }

    // Recursive processing:
    let startIndex = 0;
    while (true) {
      const preStartIndex = content.indexOf("<pre>", startIndex);
      if (preStartIndex === -1) {
        // No more <pre> tags found, add remaining content
        parts.push({ type: "html", content: content.slice(startIndex) });
        break;
      }

      const preEndIndex = content.indexOf("</pre>", preStartIndex);
      if (preEndIndex === -1) {
        // Unclosed <pre> tag, handle as you see fit (e.g., log a warning)
        console.warn("Unclosed <pre> tag in content:", content);
        break;
      }

      const prevHTML = content.slice(startIndex, preStartIndex);
      const preContent = content.slice(preStartIndex + 5, preEndIndex);

      parts.push({ type: "html", content: prevHTML });
      parts.push({ type: "pre", content: preContent });

      startIndex = preEndIndex + 6;
    }

    return parts;
  };

  const contentArray = processContentWithPreTags(htmlToAdd);

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
      <div className={isDark ? "contentContainer" : "contentContainer-light"}>
        {contentArray.map((element, idx) =>
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
    </div>
  );
}

export default BlogPost;
