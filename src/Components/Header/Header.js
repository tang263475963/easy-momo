import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render(){
        var Navbar ={
          display: 'inlineBlock',
          BackgroundColor: '#555',
          color: '#fff',
          fontSize: 25,
          padding: 10

        }

        return (
            <div style={{display: 'block', backgroundColor:'#ffc107', fontSize: 25, padding:7}}>  
              <Link to ="/" style={Navbar}>Home</Link>
              <Link to ="/about" style={Navbar}>About</Link>
              <Link to ="/signin" style={Navbar}>Signin</Link>
              <Link to ="/signup" style={Navbar}>Signup</Link>
            </div>
    )
  }
}

export default Header;