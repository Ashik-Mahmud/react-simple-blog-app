import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
const BlogDetails = () => {
  const { id } = useParams();
  return (
    <section id="blog-details">
      <div className="container">
        <h1>Single Blogs {id}</h1>
      </div>
    </section>
  );
};

export default BlogDetails;
