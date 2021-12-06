import React from 'react'
import "../App.css";

const Sfooter = () => {
    return (
      <div>
        <div className="scroll-text">
          <marquee behavior="scroll" direction="left">
            CMR College of Engineering & Technology
          </marquee>
        </div>
        <hr />
        <div className="copy">
          <footer>&copy; Copyright 19h51a05h7@cmrcet.ac.in</footer>
        </div>
      </div>
    );
}

export default Sfooter
