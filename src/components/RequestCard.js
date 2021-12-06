import React from "react";

const RequestCard = () => {
  return (
    <>
      <div className="container">
          <div>
              <p>Date : 04-12-2021</p>
          </div>
        <div className="card">
          <div>
            <h2>19H51A05H7</h2>
          </div>
          <div>
            <label htmlFor="">Category-</label>
          </div>
          <div>
            <label htmlFor="">Reason:</label>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem
            nobis voluptates quia explicabo. Quas.
          </p>
          <button className="rbtn">Accept</button>
          <button className="rcbtn"> Decline</button>
        </div>
      </div>
    </>
  );
};

export default RequestCard;
