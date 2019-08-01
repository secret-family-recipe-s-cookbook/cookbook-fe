import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Recipe = props => {
    console.log('recipe props',props.card)
    return (
         <div className="card-grid-view">
            <Card className='recipeCard'>
                <Image src={props.card.recipe_image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header className='text-capitalize'><h2>{props.card.title}</h2></Card.Header>
                    <Card.Description>
                    {props.card.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    Ingredients:
                       <p>{props.card.ingredients}</p>
                    Directions:
                       <p>{props.card.directions}</p>
                </Card.Content>
            </Card>
         </div>
    )
}

    

export default Recipe; 