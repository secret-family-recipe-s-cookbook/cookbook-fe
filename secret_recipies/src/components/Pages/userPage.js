import React, { useState, useEffect } from 'react';
import Recipes from '../Cards/recipes';
import { ButtonContainer } from "../styled-components/Button";
import { Link } from 'react-router-dom';

function UserPage (recipe) {
    const [recipes, setRecipes] = useState({
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
            
            <div className='user-page'>
                <div className='userPageTitle'>       
                    <h1>My Recipes</h1>
                </div>
                <div className='no-recipe'>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='User Page Image' className='userPageLogo' />
                    </div>
                    <div>
                    {/* <Recipes cards=this.props.cards */}
                        <Link to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></Link>
                    </div>
                </div>
            </div>
        </>
    )

    
}

export default UserPage