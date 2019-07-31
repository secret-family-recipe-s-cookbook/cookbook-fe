import React from 'react';
import Recipe from "./recipe";

const Recipes = props => {
console.log( 'recipes data',props.data)
    if(!props.data) {
return <h1>Loading Recipes</h1> 
    } else {
return (
    <div className='recipemap'>
        {props.data.map(card =>
            <Recipe key={card.id} card={card} />
            )}
    </div>
)
    }
   
};
export default Recipes;