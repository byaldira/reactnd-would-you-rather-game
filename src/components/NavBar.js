import { Component } from "react";

class NavBar extends Component{

    render(){

        return(
            <div class="w3-bar w3-black">
                <a href="#" class="w3-bar-item w3-button">Home</a>
                <a href="#" class="w3-bar-item w3-button">My Questions</a>
                <a href="#" class="w3-bar-item w3-button">My Answers</a>
                <a href="#" class="w3-bar-item w3-button w3-right">Login</a>
            </div>
        )
    }
}

export default NavBar