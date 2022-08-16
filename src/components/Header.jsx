import React from "react";
import { Link } from "react-router-dom";
import {GoThreeBars , GoX} from "react-icons/go"
const Header = () => {

  const barsMotion = () =>{
    let nav = document.querySelector('.nav')
    nav.classList.toggle('click')
  }

  return (
    <header>
      <p className="logo">
        YANGI AVLOD <span className="logo_effect">BOOTCAMP</span>
      </p>
      <div className="icon-ham" >
        <i onClick={barsMotion} ><GoThreeBars/></i>
      </div>
      <div className="nav">
        <div className="icon-x">
          <i onClick={barsMotion} ><GoX/></i>
        </div>
        <p className="logo media">
          YANGI AVLOD <span className="logo_effect">BOOTCAMP</span>
        </p>
        <Link to="/" className="line-down"  onClick={barsMotion} >
          FRONTEND BOOTCAMP
        </Link>
        <Link to="/foundation-speed" className="line-down"  onClick={barsMotion} >
          FOUNDATION SPEED <span>beta</span>
        </Link>
        <Link to="/foundation" className="line-down"  onClick={barsMotion} >
          FOUNDATION
        </Link>
        <Link to="/login" onClick={barsMotion}>
          <button>Ro'yxatdan O'tish</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
