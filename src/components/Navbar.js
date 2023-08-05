import React, { useContext } from "react";
import {Link } from 'react-router-dom'
import { AuthContext } from "../context/authcontext";
import './file.css'
import img from './/logo.png'

const Navbar=()=>{
    const {curuser,logout}=useContext(AuthContext)

    return(
        <div className="navbar">
            <div className="nav_container">
                <div >
                    <img src={img} className="logo"></img>
                </div>
                <div className="nav_elements">
                   <Link className="ourstory" to='/ourstory'>Our Story</Link>
                   <Link className="membership" to='/membership'>MemberShip</Link>
                   <Link className="write" to='/addpost'>Write</Link> 
                   <Link className="getstarted" to='signup'>Get Started</Link>
                   <span>{curuser?(curuser.name):null}</span>
                   <span>{curuser?<span onClick={logout}>LogOut</span>:(<Link className="signin" to='/signin'>Sign In</Link>)}</span>
                   <span>{curuser?<Link className="my_profile" to='/profile/:id'>My Profile</Link>:null}</span>
                   <span>My Profile</span>
                </div>
            </div>

        </div>
    )
}
export default Navbar