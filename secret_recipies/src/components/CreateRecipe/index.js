import React, {useState} from "react";

import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
import { Route, NavLink } from "react-router-dom";

function DisplayRecipe() {
    const [recipes, setRecipes] = useState([
        {
        id: 0,
        title:"Food",
        description:"delicious",
        categories:"Meal",
        prepTime:"1:00",
        cookTime:"1",
        servings:"1:00",
        calories:"900",
        image:"",
        ingredients:"vegetables",
        directions:"boil it",
        notes:"stir well",
        source:"Me",
        bio:"best cook"
        },
        {
        id: 1,
        title:"Food",
        description:"delicious",
        categories:"Meal",
        prepTime:"1:00",
        cookTime:"1",
        servings:"1:00",
        calories:"900",
        image:"",
        ingredients:"vegetables",
        directions:"boil it",
        notes:"stir well",
        source:"Me",
        bio:"best cook"
        }
    ])

    const addRecipe = recipe => {
        setRecipes([...recipes, recipe])
    }

    return (
        <div>
            <NavLink to="/createrecipe/">Add Recipes</NavLink>
            <NavLink to="/createrecipe/myrecipes">My Recipes</NavLink>

            {/* <AddRecipeForm submitRecipe = {addRecipe} /> */}
            <Route exact path="/createrecipe/" render={props => <AddRecipeForm {...props} submitRecipe = {addRecipe} />}/>
            <Route  path="/createrecipe/myrecipes" render={props => recipes.map(recipe => <RecipeCard recipe={recipe} />)}/>
       
        </div>
    )
}

export default DisplayRecipe;

