import React from 'react';
import Recipe from "./recipe";

const Recipes = props => {
    return(
        <div className='recipiemap'>
            {props.cards.map(card =>
                {return <Recipe key={card.id} card={card} />
                })}
        </div>
    );
};
export default Recipes;