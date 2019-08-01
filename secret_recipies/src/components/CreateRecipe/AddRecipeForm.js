import React, {useState} from "react"
import { addRecipe } from "../../store/actions";
import { ButtonContainer } from "../styled-components/Button";
import styled from "styled-components";
import {connect} from 'react-redux'

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

const AddRecipeForm = (props) => {
    console.log('addrecipeform props', props)
    const [recipe, setRecipe] = useState({
       title:"",
       description:"",
       categories:"",
       prepTime:"",
       cookTime:"",
       servings:"",
       calories:"",
       recipe_image:"",
       ingredients:"",
       directions:"",
       Notes:"",
       source:"",
       bio:""
    });
    const handleSubmit = event => {
        event.preventDefault();
    }

      const handleChange = event => {
        event.preventDefault();
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
      };

      const newRecipe = e => {
          e.preventDefault();
          props.addRecipe(recipe);
          props.history.push('/protected')
      }
    return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <div className='create-recipe-form-header'>
            <i className="far fa-trash-alt trashIcon" />
            <HeaderStyling>Create a Recipe</HeaderStyling>
            <form onSubmit={event => handleSubmit(event)}><ButtonContainer type ="submit" className="create-recipe-submit">Add Recipe</ButtonContainer></form>           
            </div>
            {/* <button>Add Recipe</button> */}
            <form onSubmit={event => handleSubmit(event)}>
                <div className='create-recipe-dividerOne'>
                    <div className="sideOne">
                        <span className='create-recipe-inputs'>
                            <label>
                                Title
                            </label>
                            <input type="text" value={recipe.title} name="title" onChange = {handleChange}/>
                        </span>
                        <span className='create-recipe-inputs'>
                            <label>
                                Description:
                            </label>
                            <input type="text" value={recipe.description} name="description" onChange = {handleChange}/>
                        </span>
                        <span className='create-recipe-inputs'>
                            <label>
                                Categories:
                            </label>
                            <input type="text" value={recipe.categories} name="categories" onChange = {handleChange}/>
                        </span>
                        <div className='create-recipe-flex'>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Prep Time:
                                </label>
                                <input type="time" value={recipe.prepTime} name="prepTime" onChange = {handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Cook Time:
                                </label>
                                <input type="time" value={recipe.cookTime} name="cookTime" onChange = {handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Servings:
                                </label>
                                <input type="number" value={recipe.servings} name="servings" onChange = {handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Calories:
                                </label>
                                <input type="number" value={recipe.calories} name="calories" onChange = {handleChange}/>
                            </span>
                        </div>
                    </div>
                        <span className="sideTwo">
                            <div className='create-recipe-inputs'>
                                <input type="file" value={recipe.recipe_image} name="file" accept="image/png, image/jpeg" onChange = {handleChange} className='inputfile' id='file' data-multiple-caption="{count} files selected" multiple />
                                <label htmlFor="file" className="inputfileLabel">Image: </label>
                                <h3>Add Images </h3>
                            </div>
                        </span>
                </div>
                <div className='create-recipe-dividerTwo'>
                    <span className='create-recipe-inputs'>
                        <label>
                            Ingredients:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.ingredients} name="ingredients" onChange = {handleChange} />
                    </span>
                    <span className='create-recipe-inputs'>
                        <label>
                            Directions:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.directions} name="directions" onChange = {handleChange} />
                    </span>
                    <span className='create-recipe-inputs'>
                        <label>
                            Notes:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={recipe.Notes} name="Notes" onChange = {handleChange} />
                    </span>
                </div>
                <span className='create-recipe-inputs'>
                <label>
                    Source (optional):
                </label>
                    <input type="text" value={recipe.source} name="source" onChange = {handleChange} className='optionalArea' />
                </span>
                <span className='create-recipe-inputs'>

                <label>
                    Bio (optional):
                </label>
                    <textarea rows="12" cols="50" type="text" value={recipe.bio} name="bio" onChange = {handleChange} className='optionalArea' />
                </span>
                <ButtonContainer type ="submit" className="create-recipe-submit" onClick={newRecipe}>Add Recipe</ButtonContainer>
            </form>
        </div>
    )
}

const mapStateToProps = state =>   ({
    data: state.cardReducer.data.data,
    fetching: state.cardReducer.fetching,
    error: state.cardReducer.error
   })
  
  export default connect(mapStateToProps,{addRecipe}) (AddRecipeForm);