import React, {Component} from "react";
import "./Profile.css";

class Profile extends Component {
    render(){
        return(
            <div> 
                Profile
                <img src={'./images/wolf.jpg'} className="thumnail" /> 
            </div>
    )
  }
}

export default Profile;