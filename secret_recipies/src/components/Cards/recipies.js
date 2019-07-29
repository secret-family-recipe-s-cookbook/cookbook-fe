import React from 'react';
import Recipie from "./recipie";

const Recipies = props => {
    return(
        <div className='recipiemap'>
            {props.cards.map(card =>
                {return <Recipie key={card.id} card={card} />
                })}
        </div>
    );
};
export default Recipies;