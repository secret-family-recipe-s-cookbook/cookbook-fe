import { logout } from '../../Utillities/services';
import axiosWithAuth from '../../Utillities/axiosWithAuth';
import axios from 'axios';

// Recipes to filter
const recipesToFilter = []

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
    recipesToFilter.push(res.data)
  })
  .catch(err => {
    dispatch({type: FETCH_FAILURE, payload: err.response})
  });
}


// Add Action
export const ADD_START ="ADD_START";

export const addRecipe = (index) => dispatch => {
  dispatch({ type: ADD_START });
  console.log(index)
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

//Edit Action
export const EDIT_START="EDIT_START"

export const updateRecipe = (id, editRecipe) => dispatch => {
  dispatch({ type: EDIT_START })
  axiosWithAuth()
  .put(`/recipes/${id}`, editRecipe)
  .then(res => {
    dispatch({ type: FETCH_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: FETCH_FAILURE, payload: err.response})
  });
}

//Delete Action
export const DELETE_START = "DELETE_START"

export const deleteRecipe = (id) => dispatch => {
  dispatch({ type:DELETE_START })
  axiosWithAuth()
    .delete(`/recipes/${id}`)
    .then(res => {
      dispatch({ type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload:err.response})
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


// Search Action
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const search = searchString => {
  searchString= searchString.toLowerCase();
  let filteredRecipes = recipesToFilter[0].data.filter(data => data.title.toLowerCase().includes(searchString))

  return {
      type: SEARCH_RECIPE,
      payload: filteredRecipes
  }
}