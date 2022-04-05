import React, { useContext } from "react";
import { BlogContext } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";
const Home = () => {
  const { searchBlogs } = useContext(BlogContext);

  return (
    <>
      <section id="home">
        {" "}
        <div className="container">
          <div className="title">
            <h3>Gether Knowledge here</h3>
            <p>increase your knowledge to read blog yourself</p>
          </div>
          <div className="blog-container">
            {searchBlogs.map((blog) => (
              <Blog key={blog._id} blogContent={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
