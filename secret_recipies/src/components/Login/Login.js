import React, {useState} from "react";
import { ButtonContainer } from "../styled-components/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Login = (props) => {
    const [name, setName] = useState({
        username: "",
        password: ""
      });
    
      const changeHandler = event => {
        event.preventDefault();
        console.log(event.target.value);
        setName({ ...name, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
      };


      if(!props.isModalVisible) {
        document.body.style.overflow = ""
        return null;
      } else {
        document.body.style.overflow = "hidden"
        return (         
      <div className='loginModal'>
        <ClickAwayListener onClickAway={props.closeLoginHandler}>
          <form className="login-modal" onSubmit={event => handleSubmit(event)} onKeyDown={props.closeLoginHandler2}
    tabIndex="0">
            <h1 className='loginTitle'>Welcome Back</h1>
            <p className='loginInputs'>
              <label>
                Username:
                <input className ="input-modal"
                  type="text"
                  name="username"
                  onChange={changeHandler}
                  value={name.username}
                />
              </label>
            </p>

            <p className='loginInputs'>
              <label>
                Password:
                <input className ="input-modal"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={name.password}
                />
              </label>
            </p>

            <ButtonContainer className="button-modal">Login!</ButtonContainer>
          </form>
        </ClickAwayListener>
      </div>
      )
      } 
     }

export default Login
