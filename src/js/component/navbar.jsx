import React from "react";
var stylingObject = {
    navbar:{
        backgroundColor:"rgb(52,60,68)", 
        paddingLeft:"2%",
    },
    navMain: {
        color: "white",
    }, 
    navElem: {
      color: "white",
      fontSize:"1em"
    }, 
    navRight: {
        justifyContent:"right",
        padding:"0px",
        margin:"0px",
        width:"65%"
    }
  }


const NavBar = ()=>{
    return <nav className="navbar container-fluid"style={stylingObject.navbar}>
        <div>
            <a class="navbar-brand" href="#" style={stylingObject.navMain} >
                Start Boostrap
            </a>
        </div>

        <div className="container-fluid" style={stylingObject.navRight}>
            <a class="navbar-brand" href="#" style={stylingObject.navElem}>Home</a>
            <a class="navbar-brand" href="#" style={stylingObject.navElem}>About</a>
            <a class="navbar-brand" href="#" style={stylingObject.navElem}>Services</a>
            <a class="navbar-brand" href="#" style={stylingObject.navElem}>Contact</a>
        </div>
    </nav>
};


export default NavBar;