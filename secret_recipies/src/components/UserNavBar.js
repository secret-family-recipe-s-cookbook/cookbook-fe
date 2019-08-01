import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login"
import Tooltip from "@material-ui/core/Tooltip";

function UserNavbar (props) {
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
    <>
        <div className='userNavbar sticky'>
            <NavLink to="/" className="navtitle" onClick={() => props.showLoading()}>
                <Tooltip title="Home">
                    <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='' className='logo'/>
                </Tooltip>
                    <h1 className='title'>Secret Family Recipe Cookbook</h1>
            </NavLink>
            <div className="signButton">
                <NavLink onClick={() => props.showLoading()}>
                <Tooltip title="Login">
                    <h1 className='signIn' onClick={()=>loginHandler()}>My Recipes</h1>
                </Tooltip>
                </NavLink>
            </div>
        </div>
            <Login isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} closeLoginHandler={closeLoginHandler} closeLoginHandler2={closeLoginHandler2} />
    </>
    )
}

export default UserNavbar;