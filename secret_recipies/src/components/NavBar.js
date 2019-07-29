import React from "react";

function Navbar () {
    return (
        <div className='navbar'>
            {/* Logo will be placed first  */}
            <h1 className='title'>Secret Family Recipe Cookbook</h1>
            <h1 className='signIn'>Sign In</h1>
            <h1 className='signIn'>Join</h1>
        </div>
    )
}

export default Navbar;