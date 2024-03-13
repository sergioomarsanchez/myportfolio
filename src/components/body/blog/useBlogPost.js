import { BlogPostsData } from "../../data/blogPosts";
import { useEffect, useState } from "react";

const useBlogPost = (slug) => {
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const selectedBlogpost = BlogPostsData.find(
          (post) => post.slug === slug
        );
        if (selectedBlogpost) {
          let contentEs = processContentWithPreTags(selectedBlogpost.html.es);
          let contentEn = processContentWithPreTags(selectedBlogpost.html.en);

          setBlogPost({
            ...selectedBlogpost,
            html: { es: contentEs, en: contentEn },
          });
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
