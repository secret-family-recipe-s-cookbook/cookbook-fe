import React from "react";

function Navbar () {
 const signInStyle = {
     marginRight: '2rem'
 };
    return (
        <div className='navbar'>
            {/* Logo will be placed first  */}
            <h1 className='title'>Secret Family Recipe Cookbook</h1>
            <h1 style={signInStyle}>Sign In</h1>
            <h1 style={signInStyle}>Join</h1>
        </div>
    )
}

export default Navbar;