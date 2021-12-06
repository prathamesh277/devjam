import React, { useState } from "react";
import Header from "./Header";
import Categeory from "./Categeory";
import Sfooter from "./Sfooter";

const Student = () => {
    const [clear, setClear] = useState();
    const clearHandle = () => {
      setClear("");
    };

    const textHandle = (e) => {
      setClear(e.target.value);
    };

    const sendReq = () => {
      setClear("");
      alert("Request Sent!");
    };
    return (
      <>
        <div className="app">
          <Header />
          <h1>Student Permission Access </h1>
          <div className="app-main">
            <Categeory clear={clear} textHandle={textHandle} />
          </div>
          <div className="sendbtn">
            <button className="sbtn" onClick={sendReq}>
              Send Request
            </button>
            <button className="cbtn" onClick={clearHandle}>
              Clear
            </button>
          </div>
        </div>
        <Sfooter />
      </>
    );
};

export default Student;
