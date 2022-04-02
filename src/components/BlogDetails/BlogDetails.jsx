import React, { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useSinglePost from "../../hooks/useSinglePost";
import "./BlogDetails.css";
const BlogDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [singlePost] = useSinglePost(id, setLoading);
  const { title, blog, admin, imageURL, imageName } = singlePost;
  const navigate = useNavigate();
  return (
    <section id="blog-details">
      <ContainerOverlay>
        <BackArrow onClick={() => navigate(-1)} title="Back to the post">
          <BsChevronDoubleLeft />
        </BackArrow>
      </ContainerOverlay>
      <div className="container">
        <PostContainer>
          <div className="post-image">
            {loading ? (
              <img src={imageURL} alt={imageName} />
            ) : (
              <img
                src="https://dmn80g3aplp9l.cloudfront.net/assets/images/loader.gif"
                alt="loader"
              />
            )}
          </div>
          <div className="details">
            {loading ? (
              <>
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
              </>
            ) : (
              <img
                src="https://trungk18.com/5482cf804a0e6b2fae57c5cff042c682/02.gif"
                alt="loader"
              />
            )}
          </div>
        </PostContainer>
      </div>
    </section>
  );
};

const BackArrow = styled.div`
  position: absolute;
  color: #ffffff;
  width: 50px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  left: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 2px;
  top: 10px;
`;

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
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
  .details {
    position: relative;
    top: -100px;
    padding: 0rem 5rem;
    @media (max-width: 768px) {
      padding: 0rem 1rem;
    }
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
      @media (max-width: 768px) {
        font-size: 0.9rem;
        margin: 1rem 0rem;
      }
    }
    .description {
      padding: 1rem 5rem;
      text-align: justify;
      font-size: 16px;
      line-height: 1.7;
      @media (max-width: 768px) {
        padding: 0rem 1rem;
      }
    }
  }
`;

export default BlogDetails;
