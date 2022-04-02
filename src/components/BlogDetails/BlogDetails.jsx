import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSinglePost from "../../hooks/useSinglePost";
import "./BlogDetails.css";
const BlogDetails = () => {
  const { id } = useParams();
  const [singlePost] = useSinglePost(id);
  const { title, blog, admin, imageURL, imageName } = singlePost;
  return (
    <section id="blog-details">
      <ContainerOverlay></ContainerOverlay>
      <div className="container">
        <PostContainer>
          <div className="post-image">
            <img src={imageURL} alt={imageName} />
          </div>
          <div className="details">
            <h1> {title}</h1>
            <div className="meta">
              <span>
                Data - <strong className="colorize">22 Jan, 2022</strong>
              </span>
              <span>
                Author - <strong className="colorize">{admin}</strong>
              </span>
            </div>
            <div className="description">
              <p>{blog}</p>
            </div>
          </div>
        </PostContainer>
      </div>
    </section>
  );
};

const ContainerOverlay = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    #090979 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const PostContainer = styled.div`
  position: relative;
  .post-image {
    width: 600px;
    height: 450px;
    border: 10px solid #ffffff;
    outline: 4px solid #090979;
    margin: auto;
    position: relative;
    top: -200px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .details {
    position: relative;
    top: -100px;
    padding: 0rem 5rem;
    h1 {
      text-align: center;
      font-size: 2rem;
      margin-top: 1rem;
    }
    .meta {
      text-align: center;
      margin: 0.4rem 0rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .description {
      padding: 1rem 5rem;
      text-align: justify;
      font-size: 16px;
      line-height: 1.7;
    }
  }
`;

export default BlogDetails;
