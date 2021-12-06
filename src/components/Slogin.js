import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Homeheader from './Homeheader';

const Slogin = () => {
  let navigate=useNavigate();
    return (
      <div>
        <Homeheader/>
        <div>
          <div className="fcontainer">
            <h1>Student Log in</h1>
            <br />
            <form action="http://localhost:5000" method="GET">
              <div className="box">
                <i className="fa fa-envelope"></i>
                <label for="email">
                  <b>Email</b>
                </label>
                <br />
                <input
                  type="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="box">
                <i className="fa fa-unlock"></i>
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="clearfix">
                {/* <input type="submit" className="loginbtn" value="log in" /> */}
                <button type="button" className="signupbtn" onClick={()=>{navigate("/slogin/student")}}>Log in</button>
                <div className="new-acc">
                Or <a href="/signup">Create new account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Slogin
