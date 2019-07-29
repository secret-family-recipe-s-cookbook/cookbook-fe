import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
    <div className='navbar sticky'>
        <NavLink to="/home">
            <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='' className='logo'/>
        </NavLink>
            <h3 className='title'>Secret Family Recipe Cookbook</h3>
        <NavLink to="/login">
            <h3 className='signIn'>Sign In</h3>
        </NavLink>
        <NavLink to="/registration">
            <h3 className='signIn'>Join</h3>
        </NavLink>
    </div>
    )
}

export default Navbar;