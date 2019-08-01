import React, {Component} from "react"
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

class AddRecipeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipe: {
                "title":"",
                "description":"",
                "categories":"",
                "prepTime":"",
                "cookTime":"",
                "servings":"",
                "calories":"",
                "recipe_image":"",
                "ingredients":"",
                "directions":"",
                "Notes":"",
                "source":"",
                "bio":""
             }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {title, description,categories,prepTime,cookTime,servings,calories,recipe_image,ingredients,directions,Notes,source,bio} = this.state;
        this.props.addRecipe({title, description,categories,prepTime,cookTime,servings,calories,recipe_image,ingredients,directions,Notes,source,bio});
        this.setState({title:"", description:"",categories:"",prepTime:"",cookTime:"",servings:"",calories:"",recipe_image:"",ingredients:"",directions:"",Notes:"",source:"",bio:""})
    };

      handleChange = event => {
        event.preventDefault();
        this.setState({recipe: {...this.state.recipe, [event.target.name]: event.target.value} });
      };

    //   const newRecipe = e => {
    //       console.log(recipe)
    //       e.preventDefault();
    //       props.addRecipe(recipe);
    //       props.history.push('/protected')
    //   }
      render() {
    return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <div className='create-recipe-form-header'>
            <i className="far fa-trash-alt trashIcon" />
            <HeaderStyling>Create a Recipe</HeaderStyling>
            <form onSubmit={this.handleSubmit}><ButtonContainer type ="submit" className="create-recipe-submit">Add Recipe</ButtonContainer></form>           
            </div>
            {/* <button>Add Recipe</button> */}
            <form onSubmit={this.handleSubmit}>
                <div className='create-recipe-dividerOne'>
                    <div className="sideOne">
                        <span className='create-recipe-inputs'>
                            <label>
                                Title
                            </label>
                            <input type="text" value={this.state.recipe.title} name="title" onChange = {this.handleChange} required />
                        </span>
                        <span className='create-recipe-inputs'>
                            <label>
                                Description:
                            </label>
                            <input type="text" value={this.state.recipe.description} name="description" onChange = {this.handleChange}  />
                        </span>
                        <span className='create-recipe-inputs'>
                            <label>
                                Categories:
                            </label>
                            <input type="text" value={this.state.recipe.categories} name="categories" onChange = {this.handleChange}/>
                        </span>
                        <div className='create-recipe-flex'>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Prep Time:
                                </label>
                                <input type="time" value={this.state.recipe.prepTime} name="prepTime" onChange = {this.handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Cook Time:
                                </label>
                                <input type="time" value={this.state.recipe.cookTime} name="cookTime" onChange = {this.handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Servings:
                                </label>
                                <input type="number" value={this.state.recipe.servings} name="servings" onChange = {this.handleChange}/>
                            </span>
                            <span className='create-recipe-inputs'>
                                <label>
                                    Calories:
                                </label>
                                <input type="number" value={this.state.recipe.calories} name="calories" onChange = {this.handleChange}/>
                            </span>
                        </div>
                    </div>
                        <span className="sideTwo">
                            <div className='create-recipe-inputs'>
                                <input type="file" value={this.state.recipe.recipe_image} name="file" accept="image/png, image/jpeg" onChange = {this.handleChange} className='inputfile' id='file' data-multiple-caption="{count} files selected" multiple />
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
                        <textarea rows="12" cols="50" type="text" value={this.state.recipe.ingredients} name="ingredients" onChange = {this.handleChange} required />
                    </span>
                    <span className='create-recipe-inputs'>
                        <label>
                            Directions:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={this.state.recipe.directions} name="directions" onChange = {this.handleChange} required />
                    </span>
                    <span className='create-recipe-inputs'>
                        <label>
                            Notes:
                        </label>
                        <textarea rows="12" cols="50" type="text" value={this.state.recipe.Notes} name="Notes" onChange = {this.handleChange} />
                    </span>
                </div>
                <span className='create-recipe-inputs'>
                <label>
                    Source (optional):
                </label>
                    <input type="text" value={this.state.recipe.source} name="source" onChange = {this.handleChange} className='optionalArea' />
                </span>
                <span className='create-recipe-inputs'>

                <label>
                    Bio (optional):
                </label>
                    <textarea rows="12" cols="50" type="text" value={this.state.recipe.bio} name="bio" onChange = {this.handleChange} className='optionalArea' />
                </span>
                <ButtonContainer type ="submit" className="create-recipe-submit" onClick={this.handleSubmit}>Add Recipe</ButtonContainer>
            </form>
        </div>
    )
      }
}

const mapStateToProps = state => {
    return {error:state.error}
   }
  
  export default connect(mapStateToProps,{addRecipe}) (AddRecipeForm);