import React, {Component} from "react"
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

class RecipePage extends Component {
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
        console.log('Recipe Page :', this.state.recipe);
    }

    componentDidMount(){
        document.title = 'Secret Family Recipes - Edit';
    }
    render() {
    return(
    <>
    <div className='recipePage'>
        <div className='RP-top'>    
            <div className='recipeInfo'>
                <h1>hi</h1>
                <h3>{this.state.recipe.description}</h3>
            </div>
            <div>
                <button>Edit Recipe</button>
            </div>
        </div>
    
        <div className='RPimg-container'>
            <img className='RPimg'src={this.state.recipe.recipe_image} />   
        </div>
        <div className='RPinstructions'>
            <div className='instructions'>
                <h3>Prep Time</h3>
                <h4>{this.state.recipe.prepTime}</h4>
            </div>
            <div className='instructions'>
                <h3>Cook Time</h3>
                <h4>{this.state.recipe.cookTime}</h4>
            </div>
            <div className='instructions'>
                <h3>Servings</h3>
                <h4>{this.state.recipe.servings}</h4>
            </div>
            <div className='instructions'>
                <h3>Calories</h3>
                <h4>{this.state.recipe.calories}</h4>
            </div>
        </div>

        <div className='RPbuttons'>
            <button>Ingredients</button>
            <button>Directions</button>
            <button>Notes</button>
            <button>About Recipe</button>
        </div>

        <div className='infoarea'>

        </div>
    </div>
    </>
    )
    }
}
export default connect(null,) (RecipePage)