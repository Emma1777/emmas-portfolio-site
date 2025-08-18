// src/pages/BlogDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogs } from "../constants";
import { scrollToSection } from "../utils/scrollHelpers";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  const goBackToBlog = () => {
    navigate("/");
    setTimeout(() => scrollToSection("blog"), 300);
  };

  return (
    <div className="bg-whitish-bg py-10 px-4 md:px-20 text-black">
      <Helmet>
        <title>{blog.title} | FAMO Designs</title>
        <meta name="description" content={blog.summary} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.summary} />
        <meta property="og:image" content={blog.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <button
        onClick={goBackToBlog}
        className="mb-6 bg-blueishbutton-bg text-black px-4 py-2 rounded hover:opacity-90"
      >
        ← Back to Blog
      </button>

      <h1 className="text-3xl font-bold text-blueish-text mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By FAMO Designs • {blog.date}
      </p>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-48 md:w-72 mx-auto rounded-md my-6 object-cover"
        />
      )}

      <div className="leading-relaxed space-y-4 max-w-3xl mx-auto">
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
