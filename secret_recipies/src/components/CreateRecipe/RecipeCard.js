import React, {useState} from "react"
import {NavLink} from "react-router-dom"

const RecipeCard = ({recipe}) => {
    
    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.categories}</p>
            <p>{recipe.prepTime}</p>
            <p>{recipe.cookTime}</p>
            <p>{recipe.servings}</p>
            <p>{recipe.calories}</p>
            <img url={recipe.image} alt="picture of food" />
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
            <p>{recipe.notes}</p>
            <p>{recipe.source}</p>
            <p>{recipe.bio}</p>
            <NavLink to={`/createrecipe/edit/${recipe.id}`}>Edit</NavLink> {'  '}
            <NavLink to={`/createrecipe/delete/${recipe.id}`}>Delete</NavLink>
        </div>
    )
}
export default RecipeCard;
