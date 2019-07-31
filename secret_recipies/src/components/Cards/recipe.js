import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Recipe = props => {
    console.log('recipe props',props.card)
    return (
         <div className="card-grid-view">
            <Card>
                <Image src={props.card.recipe_image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.card.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
         </div>
    )
}

    

export default Recipe; 