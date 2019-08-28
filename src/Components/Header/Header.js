import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render(){

        return (
            <div className="navbar">  
              <Link to ="/home"  className="navlink"> Home </Link>
              <Link to ="/about" className="navlink"> About </Link>
              <Link to ="/categories" className="navlink"> Categories </Link>
              <Link to ="/product" className="navlink"> Product </Link>
              <Link to ="/signin" className="navlink" style={{float:'right'}}>Signin</Link>
              <Link to ="/signup" className="navlink" style={{float:'right'}}>Signup</Link>
              <Link to ="/profile" className="navlink" style={{float:'right'}}>Profile</Link>
            </div>
    )
  }
}

export default Header;

//#ffc107 สีส้มเหลือง