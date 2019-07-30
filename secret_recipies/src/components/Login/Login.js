import React, {useState} from "react";
import { ButtonContainer } from "../styled-components/Button";

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
        return null;
      } else {
        return (<div className='loginModal'>
      <form className="login-modal" onSubmit={event => handleSubmit(event)}>
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

        <ButtonContainer className="button-modal">Submit!</ButtonContainer>
      </form>
      </div>)
      } 
     }

export default Login
