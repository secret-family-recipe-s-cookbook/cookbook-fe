import { logout } from '../../Utillities/services';
import axiosWithAuth from '../../Utillities/axiosWithAuth'
import axios from 'axios';

//Fetching Actions

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

//Login Action

export  const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post(`/auth/login`, {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem('token',res.data.token);
        console.log(res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true
      })
      .catch(res => {
        logout(callback => {
          alert(res);
        });
        dispatch({
          type: LOGIN_FAILURE,
          payload: res.data
        });
      });
  };