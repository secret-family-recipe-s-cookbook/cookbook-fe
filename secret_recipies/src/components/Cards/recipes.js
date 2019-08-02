import React from 'react';
import Recipe from "./recipe";

const Recipes = props => {
    if(!props.data) {
return <h1>Loading Recipes</h1> 
    } else {
return (
    // <div className='container'>
        <div className='recipemap row'>
            {props.data.map(card =>
                <Recipe key={card.id} card={card} setX={props.setX} />
                )}
        </div>
    // </div>
)
    }
   
};
export default Recipes;