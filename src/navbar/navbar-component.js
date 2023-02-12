import React, { Fragment } from "react";
import { PageContainer } from "./style";
import "./style.js";

const Navbar = () => {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "35px 10px";
    document.getElementById("navbar").style.backgroundColor = "pink";
    document.getElementsByClassName("logo").style.fontSize = "10px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar").style.backgroundColor = "#FFC0CBb0";
    document.getElementsByClassName("logo").style.fontSize = "20px";
    
  }
}
  return (
   <PageContainer>
   <div id="navbar" className="nav-bar-container">
      <div id="navbar-right" className="nav-items-container">
        <div className="nav-a-container"><a className="logo hover-underline-animation">home</a></div>
        <div className="nav-a-container"><a className="logo hover-underline-animation" href="#about">about</a></div>
        <div className="nav-a-container"><a className="logo hover-underline-animation" href="#skills">skills & tools</a></div>
        <div className="nav-a-container"><a className="logo hover-underline-animation" href="#projects">projects</a></div>
        <div className="nav-a-container"><a className="logo hover-underline-animation" href="#contact">contact</a></div>
      </div>
   </div>
   </PageContainer>
  );
};

export default Navbar;
