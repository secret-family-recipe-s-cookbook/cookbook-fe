import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login"
import Tooltip from "@material-ui/core/Tooltip";

function Navbar (props) {
    // State
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Handlers
    function loginHandler() {
        window.scrollTo(0, 0);
        setIsModalVisible(!isModalVisible)
    }
    const closeLoginHandler = () => {
        window.scrollTo(0, 0);
        setIsModalVisible(false)
    }

    const closeLoginHandler2 = (e) => {
        window.scrollTo(0, 0);
        console.log(e.key)
        if(e.key === 'Escape') {
        setIsModalVisible(false)
        }
    }

    return (
    <React.Fragment>
        <div className='navbar sticky'>
            <NavLink to="/" className="navtitle" onClick={() => props.showLoading()}>
                <Tooltip title="Home">
                    <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='' className='logo'/>
                </Tooltip>
                    <h3 className='title'>Secret Family Recipe Cookbook</h3>
            </NavLink>
            <div className="signButton">
                <NavLink onClick={() => props.showLoading()}>
                <Tooltip title="Login">
                    <h3 className='signIn' onClick={()=>loginHandler()}>Sign In</h3>
                </Tooltip>
                </NavLink>
                <NavLink to="/registration" onClick={() => props.showLoading()}>
                <Tooltip title="Register">
                    <h3 className='signIn'>Join</h3>
                </Tooltip>
                </NavLink>
            </div>
        </div>
            <Login isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} closeLoginHandler={closeLoginHandler} closeLoginHandler2={closeLoginHandler2} />
    </React.Fragment>
    )
}

export default Navbar;