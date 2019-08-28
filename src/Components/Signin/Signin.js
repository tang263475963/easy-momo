import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  render() {
    return (
      <div>
        <h2>เข้าสู้ระบบผู้ใช้งาน</h2>
        <form className="myForm">
          <label for="username"className="myLabel"><span>Username</span>
              <input type="text" name="username" placeholder="Usrname or E-mail" className="myInput" /> <br />
          </label>
          <label for="password"className="myLabel"><span>Password</span>
              <input type="text" name="password" placeholder="Password" className="myInput" /> <br />
          </label>

          <button className="myButton"> Sign In </button>
        </form>
      </div>
    )
  }
}

export default Signin;