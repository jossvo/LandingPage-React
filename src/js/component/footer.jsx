import React from "react";
var stylingObject = {
    footer:{
        backgroundColor:"rgb(52,60,68)", 
        paddingLeft:"2%",
        justifyContent:"center"
    },
    footerMain: {
        color: "white",
        fontSize:"1em"
    }
  }


const Footer = ()=>{
    return <nav className="navbar container-fluid"style={stylingObject.footer}>
        <a class="navbar-brand" href="#" style={stylingObject.footerMain} >
            Copyright @Jossvo 2022
        </a>
    </nav>
};

export default Footer;