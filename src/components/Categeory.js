import React from "react";
import "../App.css";

const Categeory = (props) => {
  return (
    <>
      <div className="cat">
        <div class="dropdown">
          <button class="cdropbtn">Categeory</button>
          <div class="dropdown-content">
            <a href="#">Gate Pass</a>
            <a href="#">Leave</a>
            <a href="#">Clubs</a>
            <a href="#">Sports</a>
            <a href="#">Fess</a>
          </div>
        </div>
        <div className="text-area">
          <textarea
            rows="4"
            cols="50"
            name="comment"
            form="usrform"
            placeholder="Enter Your Reason Here..."
            value={props.clear}
            onChange={props.textHandle}
          ></textarea>
        </div>
      </div>
     
    </>
  );
};

export default Categeory;
