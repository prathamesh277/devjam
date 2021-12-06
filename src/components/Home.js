import React from "react";
import cmrlogo from "../images/cmrlogo.jpg";
import Student from "./Student";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Faculty";
import About from "./About";
import Slogin from "./Slogin";
import Flogin from "./Flogin";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div>
        <section className="hheader">
          <nav>
            <img src={cmrlogo} />
            <div className="nav-links" id="navlinks">
              <ul>
                
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/slogin">Student Login</Link>
                  </li>
                  <li>
                    <Link to="/flogin">Faculty Login</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

              </ul>
            </div>
          </nav>

          <div className="text-box">
            <h1>STUDENT PERMISSION ACCESS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
              eligendi placeat ex odio sequi hic ducimus veritatis consequatur,
              ratione, cupiditate in molestias voluptatum sint quas velit saepe
              nesciunt odit? Tempore architecto mollitia quas magnam cupiditate
              sunt eos aliquam id!
            </p>
            <a href="https://cmrcet.ac.in/" target="_blank" className="hbutton">
              Click here to know about college
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
