import React from "react";
import { ButtonContainer } from "../styled-components/Button";

function Registration () {
    let SignUpForm = React.createRef();
    let signUpFirstName = React.createRef();
    let signUpLastName = React.createRef();
    let signUpUserName = React.createRef();
    let signUpEmail = React.createRef();
    let signUpPassword = React.createRef();
    let signUpConfirmPassword = React.createRef();

    return (
        <div className='registration'>
        <img
          src='https://i.imgur.com/IUXZArW.jpg'
          alt="Delicious Pasta"
          className="signUpImage"
        />           <div className="contactContainer">
        <h1 className="formTitle">Welcome to Secret Family Recipe Cookbook</h1>
            <form ref={SignUpForm} className="signUpForm">
              <p className='signUpInputs'>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  ref={signUpFirstName}
                  required
                />
              </p>
              <p className='signUpInputs'>
                <label>Last Name</label>
                <input type="text" name="lastName" ref={signUpLastName} required/>
              </p>
              <p className='signUpInputs'>
                <label>Username</label>
                <input type="text" name="userName" ref={signUpUserName} required/>
              </p>
              <p className='signUpInputs'>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  ref={signUpEmail}
                  required
                />
              </p>
              <p className='signUpInputs'>
                <label>Password</label>
                <input type="text" name="password" ref={signUpPassword} required/>
              </p>
              <p className='signUpInputs'>
                <label>Confirm Password</label>
                <input type="text" name="password" ref={signUpConfirmPassword} required/>
              </p>
              <p className="full">
                <ButtonContainer className="signUpSubmit">Submit</ButtonContainer>
              </p>
            </form>
          </div>
        </div>
    )
}

export default Registration;