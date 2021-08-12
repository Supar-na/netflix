import React, { useEffect, useState } from 'react';
import logo from '../src/img/logo.png'
import avatar from '../src/img/avatar.jpg';
import './Navbar.css';

const Navbar = () => {
    const[show,handleShow] =useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY >100){
                handleShow(true)
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll",null)
        };
    },[])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
            className="nav-logo"
            src={logo} alt="netflix-Logo" />

            <img 
            className="nav-avatar"
            src={avatar} alt="profife" />
        </div>
    );
};

export default Navbar;