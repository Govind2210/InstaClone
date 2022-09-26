import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router";
const LandingPage=()=>{
    const Navigate=useNavigate();
    return(
        <div className="main">
            <div className="image">
                <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/6f5/d79/6c2d4457e7b227254fbc0f51b8.jpg" alt="title"/>
            </div>
            <div className="heading">
                <div className="title">Click here For Enter</div>
                <button id="clickButton" className="btn" onClick={()=>{
                    Navigate("/PostView")
                }}>Click</button>
            </div>
        </div>
    );

}
export default LandingPage;