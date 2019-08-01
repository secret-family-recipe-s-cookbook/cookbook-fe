import React, {Component} from "react"
import { updateRecipe, deleteRecipe } from "../../store/actions";
import { ButtonContainer } from "../styled-components/Button";
import styled from "styled-components";
import {connect} from 'react-redux'

class EditRecipeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipe: this.props.editRecipe || {
                "title":'',
                "description":'',
                "categories":'',
                "prepTime":'',
                "cookTime":'',
                "servings":'',
                "calories":'',
                "recipe_image":'',
                "ingredients":'',
                "directions":'',
                "Notes":'',
                "source":'',
                "bio":''
             }
        }
        console.log('edit recipe props',this.props.editRecipe)
    }

    // deleteRecipe = e => {
    //     e.preventDefault()
    //     this.this.props.deleteRecipe(this.props.recipe)
    //     this.setState({
    //         recipe: {
    //             "title":"",
    //             "description":"",
    //             "categories":"",
    //             "prepTime":"",
    //             "cookTime":"",
    //             "servings":"",
    //             "calories":"",
    //             "recipe_image":"",
    //             "ingredients":"",
    //             "directions":"",
    //             "Notes":"",
    //             "source":"",
    //             "bio":""
    //         }
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateRecipe(this.state.recipe.id, this.state.recipe)
       
    };

      handleChange = event => {
        event.preventDefault();
        this.setState({recipe: {...this.props.editRecipe, [event.target.name]: event.target.value} });
      };

     
    render() {
    return(
        <div className = "create-recipe-form">
            {/* <button>delete</button> */}
            <div className='create-recipe-form-header'>
            <i className="far fa-trash-alt trashIcon" onClick={()=> this.props.deleteRecipe(this.state.recipe.id)} />
            <h1>Edit Recipe</h1>
            <form onSubmit={this.handleSubmit}><ButtonContainer type ="submit" className="create-recipe-submit">Edit Recipe</ButtonContainer></form>           
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
                <ButtonContainer type ="submit" className="create-recipe-submit" onClick={this.addRecipe}>Edit Recipe</ButtonContainer>
            </form>
        </div>
    )
      }
}

// const mapStateToProps = state => {
//     console.log("state", state)
//     return {
//         data: state.cardReducer.data.data,
//         fetching: state.cardReducer.fetching,
//         error:state.cardReducer.error
//     }
//    }
  
  export default connect(null,{updateRecipe, deleteRecipe}) (EditRecipeForm);