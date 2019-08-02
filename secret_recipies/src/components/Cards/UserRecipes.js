import React from 'react';
import UserRecipe from "./UserRecipe";

const UserRecipes = props => {
    if(!props.data) {
return <h1>Loading Recipes</h1> 
    } else {
return (
    // <div className='container'>
        <div className='recipemap row'>
            {props.data.map(card =>
                <UserRecipe key={card.id} card={card} setX={props.setX} />
                )}
        </div>
    // </div>
)
    }
   
};
export default UserRecipes;