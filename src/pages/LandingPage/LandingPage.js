import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'


const LandingPage =()=>{
    return(
        <div className="background">
        <div>
         <h1 className="welcome">WELCOME TO</h1>
         <h1 className="wegro">WEGRO BANK</h1>
        

         <button className="buttn" ><Link to="/register" className="dd">Click To Create New Account</Link></button>
        </div>
        </div>
    )
}

export default LandingPage