import React from "react";
import { NavLink } from "react-router-dom";

function Footer () {
    return (
        <div className='footer'>
            <p className='footerTitle'>&copy;2019 Secret Family Recipes Cookbook</p>
            <NavLink to="/terms">
                <p className='footerLinks'>Terms of Service</p>
            </NavLink>
            <NavLink to="/policy">
                <p className='footerLinks'>Privacy Policy</p>
            </NavLink>
        </div>
    )
}

export default Footer;