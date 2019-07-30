import React, {useState} from "react"

const SavedRecipes = (props) => {
    const { recipe } = props;
    return (
        <div>
            <div>{recipe.title}</div>
            <div>{recipe.description}</div>
            <div>{recipe.categories}</div>
            <div>{recipe.prepTime}</div>
            <div>{recipe.cookTime}</div>
            <div>{recipe.servings}</div>
            <div>{recipe.calories}</div>
            <div>{recipe.image}</div>
            <div>{recipe.ingredients}</div>
            <div>{recipe.directions}</div>
            <div>{recipe.notes}</div>
            <div>{recipe.source}</div>
            <div>{recipe.bio}</div>
        </div>
    )
}