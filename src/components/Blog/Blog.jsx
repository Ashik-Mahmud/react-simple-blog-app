import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Blog.css";
const Blog = ({ blogContent }) => {
  const { title, blog, admin, imageURL, imageName, _id } = blogContent;
  const navigate = useNavigate();
  return (
    <BlogContainer>
      <div className="blog-img">
        <img src={imageURL} alt={imageName} />
      </div>
      <div className="blog-info">
        <h3>{title}</h3>
        <div className="meta">
          <span>
            Date - <span className="colorize">24 jan, 2022</span>
          </span>
          <span>
            Posted by <strong className="colorize">{admin}</strong>
          </span>
        </div>
        <p>
          {blog.length > 150 ? (
            <>
              {blog.slice(0, 150)}{" "}
              <strong
                onClick={() => navigate(`/blog/${_id}`)}
                className="read-more"
              >
                ...Read more
              </strong>
            </>
          ) : (
            blog
          )}
        </p>
      </div>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex: 1;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin: 1rem 0rem;
  border-radius: 5px;
  .blog-img {
    height: 100%;
    width: 100%;
  }
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  .blog-info {
    position: relative;
    h3 {
      font-size: 1.2rem;
    }
    .meta {
      display: flex;
      align-items: center;
      margin: 0.5rem 0rem;
      gap: 1rem;
      font-size: 0.9rem;
    }
    p {
      color: #666;
      font-size: 0.9rem;
    }
    .read-more {
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      font-style: italic;
      color: #333;
    }
  }
`;
export default Blog;
