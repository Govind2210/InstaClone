import React from "react";
import "./Header.css"
import { BsCamera } from "react-icons/bs";
import { useNavigate } from "react-router";

const Header=()=>{
    const Navigate=useNavigate();
    return(
        <div className="header-container">
         <div>
      <img src="https://cdn.pixabay.com/photo/2017/02/08/08/39/instagram-2048131_1280.png"
        alt="This is logo"
        className="image"
      />
     
    </div>
        <div className="camera"><button id="but" onClick={()=>{Navigate("/Post")}}><BsCamera size="4em"/></button></div>
        </div>
    );
}
export default Header;