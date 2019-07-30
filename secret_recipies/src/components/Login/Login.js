import React, {useState} from "react";
//import { Button, Modal } from 'semantic-ui-react'


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
      return (
        <div >
          <form className="login-modal" onSubmit={event => handleSubmit(event)}>
            <label>
              Username:
              <input className ="input-modal"
                type="text"
                name="username"
                onChange={changeHandler}
                value={name.username}
              />
            </label>
    
            <label>
              Password:
              <input className ="input-modal"
                type="password"
                name="password"
                onChange={changeHandler}
                value={name.password}
              />
            </label>
    
            <button className="button-modal">Submit!</button>
          </form>
        </div>
      );}

export default Login
