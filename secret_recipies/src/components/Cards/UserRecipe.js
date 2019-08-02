import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { deleteRecipe } from "../../store/actions"

const UserRecipe = props => {
    
    const editRecipe = () => {
        props.setX(props.card)
    }
    console.log('Recipe:', props)
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    console.log('Working?: ', props)
    return (
    
        <div className='recipePage'>
        <div className='RP-top'>    
            <div className='recipeInfo'>
                <h1>{props.card.title}</h1>
                <h3>{props.card.description}</h3>
            </div>
            <div>
                <button>Edit Recipe</button>
            </div>
        </div>
    
        <div className='RPimg-container'>
            <img className='RPimg'src={props.card.recipe_image} />   
        </div>
        <div className='RPinstructions'>
            <div className='instructions'>
                <h3>Prep Time</h3>
                <h4>{props.card.prepTime}</h4>
            </div>
            <div className='instructions'>
                <h3>Cook Time</h3>
                <h4>{props.card.cookTime}</h4>
            </div>
            <div className='instructions'>
                <h3>Servings</h3>
                <h4>{props.card.servings}</h4>
            </div>
            <div className='instructions'>
                <h3>Calories</h3>
                <h4>{props.card.calories}</h4>
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
    )
}



export default connect(null,{deleteRecipe})(UserRecipe);