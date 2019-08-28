import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <div> <h2>สมัครสมาชิกกันะจ้าา</h2>

        <form className="myForm">

          <labal for="username" className="myLabel"><span>Username </span>
            <input type="text" name="username" placeholder="Usrname or E-mail" className="myInput" />
          </labal>

          <labal for="password" className="myLabel"><span>Password</span>
            <input type="text" name="password" placeholder="Password" className="myInput" />
          </labal>

          <labal for="comfirm-password" className="myLabel"><span>Comfirm Password</span>
            <input type="text" name="comfirm-passwordord" placeholder="Password" className="myInput" />
          </labal>

          <labal for="firstname" className="myLabel"><span>FirstName</span>
            <input type="text" name="firstname" placeholder="Firstname" className="myInput" />
          </labal>

          <labal for="lastname" className="myLabel"><span>LastName</span>
            <input type="text" name="lastname" placeholder="Lastname" className="myInput" />
          </labal>

          
            <button className="myButton"> Sign In </button>
          

        </form>
      </div>
    )
  }
}

export default Signup;