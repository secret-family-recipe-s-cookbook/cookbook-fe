import React from "react";
import { NavLink } from "react-router-dom";

function Footer () {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className='footer'>
            <p className='footerTitle'>&copy;2019 Secret Family Recipes Cookbook</p>
            <NavLink to="/terms" onClick={scrollToTop}>
                <p className='footerLinks'>Terms of Service</p>
            </NavLink>
            <NavLink to="/policy" onClick={scrollToTop}>
                <p className='footerLinks'>Privacy Policy</p>
            </NavLink>
        </div>
    )
}

export default Footer;