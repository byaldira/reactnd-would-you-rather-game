import { Component } from "react";

class NavBar extends Component{

    render(){

        return(
            <div className="w3-bar w3-black">
                <a href="#" className="w3-bar-item w3-button">Home</a>
                <a href="#" className="w3-bar-item w3-button">My Questions</a>
                <a href="#" className="w3-bar-item w3-button">My Answers</a>
                <a href="#" className="w3-bar-item w3-button w3-right">Login</a>
            </div>
        )
    }
}

export default NavBar