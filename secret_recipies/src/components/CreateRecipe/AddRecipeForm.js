import React, {Component} from "react"
import { addRecipe } from "../../store/actions";
import { ButtonContainer } from "../styled-components/Button";
import styled from "styled-components";
import {connect} from 'react-redux'
import { Route } from "react-router-dom";
import EditRecipeForm from './EditRecipeForm'


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

    componentDidMount(){
        document.title = 'Secret Family Recipes - Create';
    }

    editRecipe = editedRecipe => {
        const recipesCopy = [...this.state.recipes];
        const oldRecipe = recipesCopy.find(recipe => this.state.recipe.id === editedRecipe.id)
        Object.assign(oldRecipe, editedRecipe);
        this.setState(recipesCopy);
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

      
      addRecipe = e => {
          e.preventDefault()
          this.props.addRecipe(this.state.recipe)
          this.setState({
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
        })
    }
    render() {
        const editRecipe = editedRecipe => {
          const recipesCopy = [...this.state.recipe];
          const oldRecipe = recipesCopy.find(recipe => recipe.id === editedRecipe.id)
          Object.assign(oldRecipe, editedRecipe);
          this.setState({recipe: recipesCopy});
      }
        return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <div className='create-recipe-form-header'>
            <i className="far fa-trash-alt trashIcon" />
            <h1>Create a Recipe</h1>
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
                        <span className="sideTwo create-recipe-inputs">
                                <label>
                                    Image Url:
                                </label>                                
                                <input type="text" value={this.state.recipe.recipe_image} name="recipe_image" onChange = {this.handleChange}  />
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
                <ButtonContainer type ="submit" className="create-recipe-submit" onClick={this.addRecipe}>Add Recipe</ButtonContainer>
            </form>
        </div>
    )
      }
}

const mapStateToProps = state => {
    return {
        data: state.cardReducer.data.data,
        fetching: state.cardReducer.fetching,
        error:state.cardReducer.error
    }
}
  
  export default connect(mapStateToProps,{addRecipe}) (AddRecipeForm);