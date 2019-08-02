import React, {useState} from "react";
import { ButtonContainer } from "../styled-components/Button";
import { connect } from 'react-redux';
import { addUser } from "../../store/actions";


const Registration = (props) => {
  
  const [user, setUser] = useState({
        "firstname": "",
        "lastname": "",
        "username": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
  });

  const changeHandler = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const registration = e => {
    e.preventDefault();
    // user.firstname, user.lastname, user.username, user.email, user.password, user.confirmPassword
    props.addUser(user)
    props.history.push('/protected');
  }
  

  return (
        <div className='registration'>
        <img
          src='https://i.imgur.com/IUXZArW.jpg'
          alt="Delicious Pasta"
          className="signUpImage"
        />           
        <div className="contactContainer">
          <h1 className="formTitle">Welcome to Secret Family Recipe Cookbook</h1>
            <form className="signUpForm">
              <p className='signUpInputs'>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  onChange={changeHandler}
                  value={user.firstname}
                  required
                />
              </p>
              <p className='signUpInputs'>
                <label>Last Name</label>
                <input type="text" name="lastname"  onChange={changeHandler} value={user.lastname} required/>
              </p>
              <p className='signUpInputs'>
                <label>Username</label>
                <input type="text" name="username" onChange={changeHandler} value={user.username} required/>
              </p>
              <p className='signUpInputs'>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={changeHandler} 
                  value={user.email}
                  required
                />
              </p>
              <p className='signUpInputs'>
                <label>Password</label>
                <input type="text" name="password" onChange={changeHandler} value={user.password} required/>
              </p>
              <p className='signUpInputs'>
                <label>Confirm Password</label>
                <input type="text" name="confirmPassword" onChange={changeHandler} value={user.confirmPassword} required/>
              </p>
              <p className="full">
                <ButtonContainer className="signUpSubmit" onClick={registration}>Submit</ButtonContainer>
              </p>
            </form>
          </div>
        </div>
    )
  }

const mapStateToProps = state => ({
  error: state.error,
  addUser: state.addUser,
  fetchingData: state.fetchingData
});
export default connect(  mapStateToProps, { addUser })(Registration);