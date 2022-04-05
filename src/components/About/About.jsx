import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <AboutContainer>
          <div className="about-text">
            <h4>Who I am ?</h4>
            <h1>
              I am <span className="colorize">Ashik Mahmud</span>
            </h1>
            <p>
              Yeah! I am full stack developer with 4 years experiences of React
              Framework. I already done lots of projects for my clients who are
              being satisfied.
            </p>
            <div className="btn-groups">
              <button>Download CV</button>
              <button>Portfolio</button>
            </div>
            <div className="social-links">
              <a href="facebook.com">
                <AiFillLinkedin />
              </a>
              <a href="facebook.com">
                <AiFillGithub />
              </a>
              <a href="facebook.com">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://avatars.githubusercontent.com/u/67781689?v=4"
              alt="about"
            />
          </div>
        </AboutContainer>
      </div>
    </section>
  );
};

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 5rem 0rem;
  gap: 6rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  .about-text {
    flex: 1;
    position: relative;
    h1 {
      font-size: 3rem;
      margin: 0.4rem 0rem;
    }
    p {
      margin: 0.2rem 0rem;
      line-height: 1.7;
      color: #333;
    }
    .btn-groups {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 0.6rem;
      button {
        background-color: var(--primary-color);
        color: var(--white-color);
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-family: "poppins";
        cursor: pointer;
        &:last-child {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
      }
    }
    .social-links {
      position: relative;
      margin: 1rem 0rem;
      gap: 0.5rem;
      display: flex;
      align-items: center;
      a {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        font-size: 1.1rem;
        transition: all 0.4s ease;
        &:hover {
          background-color: var(--primary-color);
          color: var(--white-color);
        }
      }
    }
  }
  .about-image {
    flex: 1;
    img {
      border: 10px solid var(--primary-color);
      border-radius: 5px;
      padding: 0.5rem;
    }
  }
`;

export default About;
