import React from 'react';

const Recipie = (props) => {
    return(
        <div className="recipiediv">
            <h2>{props.card.recipie_title}</h2>
            <h3>{props.card.username}</h3>
            <img src={props.card.recipieimg}/>
            <p>{props.card.ingredients}</p>
        </div>
    )
} 