import React, {useState} from "react"
import { ButtonContainer } from "../styled-components/Button";
import styled from "styled-components";

export const InputStyling = styled.input
`
  width: 500px;
  height: 30px;
  background: white;
  box-shadow: 1px 1px 1px #aaaaaa;
  border: none;
`;
export const HeaderStyling = styled.h2
`
  text-align: center;
  padding-bottom: 50px;
  
`;

export const LabelStyling = styled.label
`
display: block;
padding-bottom: 10px;
font-size: 25px;
`

function AddRecipeForm(props) {
    const { submitRecipe, initialRecipe, buttonText, history } = props;
    const [recipe, setRecipe] = useState(initialRecipe || {
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
        history.push("/createrecipe/myrecipes")
    };

      const handleChange = event => {
        event.preventDefault();
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
      };
    return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <div className='create-recipe-form-header'>
            <div className='trashBackground' onClick={props.openModal}><img src='https://i.imgur.com/d4m3vlB.png?1' alt='Trash Icon' className='trashIcon' /></div>
            <HeaderStyling>Create a Recipe</HeaderStyling>
            <ButtonContainer type ="submit" className="create-recipe-submit">{buttonText}</ButtonContainer>            
            </div>
            {/* <button>Add Recipe</button> */}
            <form onSubmit={event => handleSubmit(event)}>
                <div className='create-recipe-dividerOne'>
                    <div className="sideOne">
                        <p className='create-recipe-inputs'>
                            <label>
                                Title
                            </label>
                            <input type="text" value={recipe.title} name="title" onChange = {handleChange}/>
                        </p>
                        <p className='create-recipe-inputs'>
                            <label>
                                Description:
                            </label>
                            <input type="text" value={recipe.description} name="description" onChange = {handleChange}/>
                        </p>
                        <p className='create-recipe-inputs'>
                            <label>
                                Categories:
                            </label>
                            <input type="text" value={recipe.categories} name="categories" onChange = {handleChange}/>
                        </p>
                        <div className='create-recipe-flex'>
                            <p className='create-recipe-inputs'>
                                <label>
                                    Prep Time:
                                </label>
                                <input type="time" value={recipe.prepTime} name="prepTime" onChange = {handleChange}/>
                            </p>
                            <p className='create-recipe-inputs'>
                                <label>
                                    Cook Time:
                                </label>
                                <input type="time" value={recipe.cookTime} name="cookTime" onChange = {handleChange}/>
                            </p>
                            <p className='create-recipe-inputs'>
                                <label>
                                    Servings:
                                </label>
                                <input type="number" value={recipe.servings} name="servings" onChange = {handleChange}/>
                            </p>
                            <p className='create-recipe-inputs'>
                                <label>
                                    Calories:
                                </label>
                                <input type="number" value={recipe.calories} name="calories" onChange = {handleChange}/>
                            </p>
                        </div>
                    </div>
                        <div className="sideTwo">
                            <p className='create-recipe-inputs'>
                                <input type="file" value={recipe.image} name="file" accept="image/png, image/jpeg" onChange = {handleChange} className='inputfile' id='file' data-multiple-caption="{count} files selected" multiple />
                                <label for="file" className="inputfileLabel">Image: </label>
                                <h3>Add Images </h3>
                            </p>
                        </div>
                </div>
                <div className='create-recipe-dividerTwo'>
                    <p className='create-recipe-inputs'>
                        <label>
                            Ingredients:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.ingredients} name="ingredients" onChange = {handleChange} />
                    </p>
                    <p className='create-recipe-inputs'>
                        <label>
                            Directions:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.directions} name="directions" onChange = {handleChange} />
                    </p>
                    <p className='create-recipe-inputs'>
                        <label>
                            Notes:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.notes} name="notes" onChange = {handleChange} />
                    </p>
                </div>
                <p className='create-recipe-inputs'>
                <label>
                    Source (optional):
                </label>
                    <input type="text" value={recipe.source} name="source" onChange = {handleChange} className='optionalArea' />
                </p>
                <p className='create-recipe-inputs'>

                <label>
                    Bio (optional):
                </label>
                    <textarea rows="12" cols="50" type="text" value={recipe.bio} name="bio" onChange = {handleChange} className='optionalArea' />
                </p>
                <ButtonContainer type ="submit" className="create-recipe-submit">{buttonText}</ButtonContainer>
            </form>
        </div>
    )
}

export default AddRecipeForm;