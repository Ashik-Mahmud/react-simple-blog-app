import React from "react";
import styled from "styled-components";

const Videos = () => {
  return (
    <div>
      <div className="container">
        <VideoContainer>
          <div className="title">
            <h1>
              Introduce my <span className="colorize">Self</span>
            </h1>
            <p>here is my introduce videos</p>
          </div>
          <div className="videos">
            <iframe
              src="https://www.youtube.com/embed/abep0mVSSys"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoContainer>
      </div>
    </div>
  );
};

const VideoContainer = styled.div`
  text-align: center;
  padding: 4rem 0rem;
  position: relative;
  .title {
    padding: 1rem 0rem;
  }
  iframe {
    width: 800px;
    aspect-ratio: 16/9;
    border: 10px solid var(--primary-color);
    border-radius: 5px;
  }
`;
export default Videos;
