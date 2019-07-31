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
        setRecipes([...recipes, {...recipe, id: Date.now()}])
    }

    const editRecipe = editedRecipe => {
        const recipesCopy = [...recipes];
        const oldRecipe = recipesCopy.find(recipe => recipe.id === editedRecipe.id)
        Object.assign(oldRecipe, editedRecipe);
        setRecipes(recipesCopy);
    }

    return (
        <div>
            <div className="create-recipe-navlink">
                <NavLink to="/createrecipe/">Add Recipes</NavLink>
                <NavLink to="/createrecipe/myrecipes">My Recipes</NavLink>
            </div>
            {/* <AddRecipeForm submitRecipe = {addRecipe} /> */}
            <Route exact path="/createrecipe/" render={props => <AddRecipeForm {...props} submitRecipe = {addRecipe} buttonText="Add Recipe" />}/>
            <Route  path="/createrecipe/myrecipes" render={props => recipes.map(recipe => <RecipeCard recipe={recipe} />)}/>
            <Route path="/createrecipe/edit/:id" 
                    render={props => {
                        const recipe = recipes.find(recipe => recipe.id.toString() === props.match.params.id)
                        return <AddRecipeForm {...props} initialRecipe = {recipe} submitRecipe={editRecipe} buttonText="Edit Recipe"/> 
                    }}/>
        </div>
    )
}

export default DisplayRecipe;

