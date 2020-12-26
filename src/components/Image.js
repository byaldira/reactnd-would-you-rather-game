import { Component } from "react";


class Image extends Component  {
    render(){
        const{  alt , imgSrc } = this.props
        return(
            <img alt={alt} src={imgSrc} height="50"  className="w3-image"/>
        )
    }
}

export default Image