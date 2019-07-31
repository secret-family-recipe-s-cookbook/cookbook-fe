import React, {useState} from "react"
import { ButtonContainer } from "../styled-components/Button";
import styled from "styled-components";

export const InputStyling = styled.input
`
  width: 300px;
`;

function AddRecipeForm(props) {
    const { submitRecipe } = props;
    const [recipe, setRecipe] = useState({
       title:"",
       description:"",
       categories:"",
       prepTime:"",
       cookTime:"",
       servings:"",
       calories:"",
       image:"",
       ingredients:"",
       directions:"",
       notes:"",
       source:"",
       bio:""
    });

    const handleSubmit = event => {
        event.preventDefault();
        submitRecipe(recipe);
        setRecipe({  title:"",
        description:"",
        categories:"",
        prepTime:"",
        cookTime:"",
        servings:"",
        calories:"",
        image:"",
        ingredients:"",
        directions:"",
        notes:"",
        source:"",
        bio:""
        })
    };

      const handleChange = event => {
        event.preventDefault();
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
      };
    return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <h3>Create a Recipe</h3>
            {/* <button>Add Recipe</button> */}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Title:
                    <InputStyling type="text" value={recipe.title} name="title" onChange = {handleChange}/>
                </label>
                <label>
                    Description:
                    <input type="text" value={recipe.description} name="description" onChange = {handleChange}/>
                </label>
                <label>
                    Categories:
                    <input type="text" value={recipe.categories} name="categories" onChange = {handleChange}/>
                </label>
                <label>
                    Prep Time:
                    <input type="time" value={recipe.prepTime} name="prepTime" onChange = {handleChange}/>
                </label>
                <label>
                    Cook Time:
                    <input type="time" value={recipe.cookTime} name="cookTime" onChange = {handleChange}/>
                </label>
                <label>
                    Servings:
                    <input type="number" value={recipe.servings} name="servings" onChange = {handleChange}/>
                </label>
                <label>
                    Calories:
                    <input type="number" value={recipe.calories} name="calories" onChange = {handleChange}/>
                </label>
                <label>
                    Image:
                <input type="file" value={recipe.image} name="image" accept="image/png, image/jpeg" onChange = {handleChange}/>
                </label>
                <label>
                    Ingredients:
                    <input type="text" value={recipe.ingredients} name="ingredients" onChange = {handleChange}/>
                </label>
                <label>
                    Directions:
                    <input type="text" value={recipe.directions} name="directions" onChange = {handleChange}/>
                </label>
                <label>
                    Notes:
                    <input type="text" value={recipe.notes} name="notes" onChange = {handleChange}/>
                </label>
                <label>
                    Source (optional):
                    <input type="text" value={recipe.source} name="source" onChange = {handleChange}/>
                </label>
                <label>
                    Bio (optional):
                    <input type="text" value={recipe.bio} name="bio" onChange = {handleChange}/>
                </label>
                <ButtonContainer type ="submit" className="signUpSubmit">Add Recipe</ButtonContainer>
            </form>
        </div>
    )
}

export default AddRecipeForm;