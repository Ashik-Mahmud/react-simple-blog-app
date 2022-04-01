import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
const Header = () => {
  return (
    <header id="header">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <ImBlog />
              Blog
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/videos"
                >
                  Videos
                </NavLink>
              </li>
            </ul>
            <SearchContainer>
              <input type="search" placeholder="Search" />
              <button>
                <BsSearch />
              </button>
            </SearchContainer>
          </div>
        </div>
      </nav>
    </header>
  );
};

const SearchContainer = styled.div`
  width: min(100% - 2rem, 400px);
  padding: 0.4rem;
  position: relative;
  background-color: #f8f8f8;
  margin: 1rem 0rem;
  display: flex;
  align-items: stretch;

  input {
    width: 100%;
    font-size: 1rem;
    font-family: "poppins";
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
  }
  button {
    padding: 0rem 1rem;
    background-color: var(--primary-color);
    color: #ffffff;
    font-size: 1rem;
    font-family: "poppins";
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;
export default Header;
