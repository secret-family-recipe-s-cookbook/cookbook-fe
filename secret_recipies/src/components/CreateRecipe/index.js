import React, {useState} from "react";
import SavedRecipes from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
import { Route, NavLink } from "react-router-dom";

function DisplayRecipe() {
    const [recipes, setRecipes] = useState({
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
    })

    const addRecipe = recipe => {
        setRecipes([...recipes, {...recipe, id: Date.now()}])
    }

    return (
        <div>
            <NavLink>Add Recipes</NavLink>
            <NavLink>My Recipes</NavLink>
            <Route path="/add" render={props => <Form {...props} submitRecipe = {addRecipe} />} />
            <Route path="/recipes" render={props => recipes && recipes.map(recipe => <SavedRecipes recipe={recipe} />)}/>
            <Route path="/edit/:id" 
                render={props => {
                recipes.find(recipe => recipe.id === props.match.params.id)
                return <AddRecipeForm {...props} />
                }}/>
        </div>
    )
}

export default DisplayRecipe;