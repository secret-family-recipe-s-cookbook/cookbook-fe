import React, { useState, useEffect } from 'react';
import RecipeCard from '../CreateRecipe/RecipeCard';
import { ButtonContainer } from "../styled-components/Button";
import { Link } from 'react-router-dom';
import UserNavBar from '../UserNavBar';

function UserPage (recipe) {
    const [recipies, setRecipies] = useState({
           "recipe_image": " ",
            "title": "",
            "description": "",
            "ingredients": "",
            "directions": "",
            "Notes": " ",
            "source": " ",
            "bio": " ",
            "source_image": " " ,
});
    

      
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
                    {recipies.map(recipe => <RecipeCard recipe={recipe} />)}
                        <Link to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></Link>
                    </div>
                </div>
            </div>
        </>
    )

    return(
        <>
        <div className='my-recipes'>
            <div className='userPageTitle'>       
                <h1>My Recipes</h1>
            </div>
            <Link to={`/createrecipe`}><ButtonContainer className="signUpSubmit">Add Recipe</ButtonContainer></Link>
        </div>
        
        </>
    )
}

export default UserPage