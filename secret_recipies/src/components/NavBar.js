import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login"

function Navbar (props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function loginHandler() {
        setIsModalVisible(!isModalVisible)
    }

    return (
    <React.Fragment>
        <div className='navbar sticky'>
            <NavLink to="/" className="navtitle" onClick={() => props.showLoading()}>
                <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='' className='logo'/>
                <h3 className='title'>Secret Family Recipe Cookbook</h3>
            </NavLink>
            <div className="signButton">
                <NavLink onClick={() => props.showLoading()}>
                    <h3 className='signIn' onClick={()=>loginHandler()}>Sign In</h3>
                </NavLink>
                <NavLink to="/registration" onClick={() => props.showLoading()}>
                    <h3 className='signIn'>Join</h3>
                </NavLink>
            </div>
        </div>
        <Login isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </React.Fragment>
    )
}

export default Navbar;