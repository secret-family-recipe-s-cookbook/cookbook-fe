import React, {useState} from "react";
import { Button, Confirm } from 'semantic-ui-react'
import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
import { Route, NavLink } from "react-router-dom";


function DisplayRecipe() {
    const [recipes, setRecipes] = useState({
            "recipe_image": " ",
            "title": "",
            "description": "",
            "ingredients": "",
            "directions": "",
            "Notes": " ",
            "source": " ",
            "bio": " ",
            "source_image": " ",
    })

   

    const addRecipe = recipe => {
        setRecipes([...recipes, {...recipe, id: Date.now()}])
    }

    const editRecipe = editedRecipe => {
        const recipesCopy = [...recipes];
        const oldRecipe = recipesCopy.find(recipe => recipe.id === editedRecipe.id)
        Object.assign(oldRecipe, editedRecipe);
        setRecipes(recipesCopy);
    }

    const deleteRecipe = recipe => {
        
    }

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)


    return (
        <div>
            {open ?
            <div>
                <Button onClick={openModal}></Button>
                <Confirm content= "Are you sure to delete your recipe permanently?" cancelButton= "Cancel" confirmButton="Delete" open={openModal} onCancel={closeModal} onConfirm={closeModal} />
            </div> : null
            } 
            <div className="create-recipe-navlink">
                <NavLink to="/createrecipe/">Add Recipes</NavLink>
                <NavLink to="/createrecipe/myrecipes">My Recipes</NavLink>
            </div>
            {/* <AddRecipeForm submitRecipe = {addRecipe} /> */}
            <Route exact path="/createrecipe/" render={props => <AddRecipeForm {...props} submitRecipe = {addRecipe} buttonText="Add Recipe" open={open} setOpen={setOpen} openModal={openModal} closeModal={closeModal} />}/>
            <Route  path="/createrecipe/myrecipes" render={props => recipes.map(recipe => <RecipeCard recipe={recipe} open={open} setOpen={setOpen} openModal={openModal} closeModal={closeModal} />)}/>
            <Route path="/createrecipe/edit/:id" 
                    render={props => {
                        const recipe = recipes.find(recipe => recipe.id.toString() === props.match.params.id)
                        return <AddRecipeForm {...props} initialRecipe = {recipe} submitRecipe={editRecipe} buttonText="Edit Recipe"/> 
                    }}/>
        </div>
    )
}

export default DisplayRecipe;

