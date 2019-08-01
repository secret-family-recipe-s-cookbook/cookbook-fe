import { logout } from '../../Utillities/services';
import axiosWithAuth from '../../Utillities/axiosWithAuth';
import axios from 'axios';

//Fetching Actions

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchCard = () =>dispatch => {
  dispatch({ type: FETCH_START});
  axiosWithAuth()
    .get(`/recipes`,)
    .then(res => {
      console.log('fetched recipes', res.data)
      dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

// Add Action
export const ADD_START ="ADD_START";

export const addRecipe = (index) => dispatch => {
  dispatch({ type: ADD_START });
  axiosWithAuth()
  .post(`/recipes`, index)
  .then(res => {
    console.log('added recipe', res.data)
    dispatch({type: FETCH_SUCCESS, payload: res.data})
    return true
  })
  .catch (err =>{
    dispatch({type: FETCH_FAILURE})
  });
}
//Login Action

export  const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (usernameoremail, password) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post(`/auth/login`, {
        usernameoremail: usernameoremail,
        password: password
      })
      .then(res => {
        localStorage.setItem('token',res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true
      })
      .catch(res => {

        logout(callback => {
          console.log(usernameoremail)
          alert(res);
        });
        dispatch({
          type: LOGIN_FAILURE,
          payload: res.data
        });
      });
  };

  //Register Actions

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const addUser = addUser => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
  .post(`/auth/register`, addUser)
  .then(res => {
    localStorage.setItem('token', res.data.token)
    dispatch({ type:REGISTRATION_SUCCESS, payload: res.data});
    return true;
  })
  .catch(err => {
    
    dispatch({type: REGISTRATION_FAILURE, payload: err.response})
  })
}