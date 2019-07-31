import React, { useState, useEffect } from 'react';
import RecipeCard from '../CreateRecipe/RecipeCard';
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
                <div className='no-recipe'>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='User Page Image' className='userPageLogo' />
                    </div>
                    <div>
                        <h1>Oh no!</h1>
                        <h3>You havn't created a recipe yet.</h3>
                        <Link to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></Link>
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
            <Link to={`/createrecipe`}><ButtonContainer className="signUpSubmit">Add Recipe</ButtonContainer></Link>
        </div>
        <RecipeCard props={recipe} />
        </>
    )
}

export default UserPage