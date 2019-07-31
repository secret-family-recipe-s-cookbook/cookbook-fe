import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipies from '../Cards/recipies';
import { ButtonContainer } from "../styled-components/Button";
import { Link } from 'react-router-dom';
import UserNavBar from '../UserNavBar';

function UserPage (props) {
    
    if (!props.cards) {
      
    return(
        <>
            <UserNavBar />
            <div className='user-page'>
                <div className='userPageTitle'>       
                    <h1>My Recipes</h1>
                </div>
                <div className='noRecipe'>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='User Page Image' className='userPageLogo' />
                    </div>
                    <div>
                        <h1>Oh no!</h1>
                        <h3>{props.username} hasn't created a recipe yet.</h3>
                        <Link to='/createrecipe'><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const { recipe } = props;
    return(
        <>
        <div className='my-recipes'>
            <div className='userPageTitle'>       
                <h1>My Recipes</h1>
            </div>
            <Link to={``}><ButtonContainer className="signUpSubmit">Add Recipe</ButtonContainer></Link>
        </div>
        <Recipies props={recipe} />
        </>
    )
}

export default UserPage