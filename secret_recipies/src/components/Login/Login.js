import React, {useState} from "react";
import  { login }  from '../../store/actions/index'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { ButtonContainer } from "../styled-components/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Login = (props) => {
    
    const [name, setName] = useState({
        usernameoremail: "",
        password: ""
      });
      const changeHandler = event => {
        event.preventDefault();
        console.log(event.target.value);
        setName({ ...name, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
      };

      const login = e => {
        e.preventDefault();
        props.login(name.usernameoremail, name.password).then(res => {
          if(res) {
            console.log('res',res)
            props.history.push('/protected');
          }
          console.log(props.history)
        });
      }

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
                  name="usernameoremail"
                  onChange={changeHandler}
                  value={name.usernameoremail}
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

            <ButtonContainer className="button-modal" onClick={login}>Login!</ButtonContainer>
            <p className='forgotText'>Forgot username or password? Click here.</p>
          </form>
        </ClickAwayListener>
      </div>
      )
      } 
     }

     const mapStateToProps = state => {
      return {
        isloadingLOGIN: state.isloadingLOGIN,
        successLOGIN: state.successLOGIN,
        usernameoremail: state.usernameoremail
      };
    };
    
    export default withRouter(
      connect(
        mapStateToProps,
        { login }
      )(Login)
    );
