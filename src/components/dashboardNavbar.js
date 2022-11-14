import React from "react";
import logo from "../assets/logo.svg"
import navbar1 from "../assets/navbar1.svg"
import navbar2 from "../assets/navbar2.svg"
import navbar3 from "../assets/navbar3.svg"
import navbar4 from "../assets/navbar4.svg"
import navbar6 from "../assets/navbar6.svg"
import "./dashboardNav.css"
function NavBar (){

return (
    <div className="nav-bar">
    <img src={logo} className="logo" alt="logo" />
   
    <div className="nav__container nav__selected">
     <img src={navbar1} alt="navigation" />
     <p>DashBoard</p>
    </div>

    <div className="nav__container">
     <img src={navbar2} alt="navigation" />
     <p>Bookings</p>
    </div>

    <div className="nav__container">
     <img src={navbar3} alt="navigation" />
     <p>Users</p>
    </div>

    <div className="nav__container">
     <img src={navbar4} alt="navigation" />
     <p>Gallery</p>
    </div>

    <div className="nav__container">
     <img src={navbar6} alt="navigation" />
     <p>Accounts</p>
    </div>

   


    </div>
)
}

export default NavBar