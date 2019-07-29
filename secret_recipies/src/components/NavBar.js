import React,{useState} from "react";
//import { Link } from "react-router-dom"


import Login from "./Login/Login"
import "./Login/Login.css"


function Navbar () {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
          <div className='navbar sticky'>
            {/* Logo will be placed first  */}
            <h1 className='title'>Secret Family Recipe Cookbook</h1>
            <button onClick={()=>setIsModalVisible(!isModalVisible)}>Sign In</button>
            {isModalVisible && (
                <Login onModalClose={()=> setIsModalVisible(false)}/>
            )}
            <h1 className='signIn'>Join</h1>
        </div>
    )
}



export default Navbar;

//<h1 className='signIn'>Sign In</h1>