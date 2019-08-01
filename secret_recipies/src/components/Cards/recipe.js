import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { deleteRecipe } from "../../store/actions"

const Recipe = props => {
    console.log('recipe props',props)
    
    const editRecipe = () => {
        props.setX(props.card)
    }
    
    return (
        <div className="card-grid-view">
                <Card className='recipeCard'>
                    <Image size ="medium" src={props.card.recipe_image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header className='text-capitalize'><h2>{props.card.title}</h2></Card.Header>
                        <Card.Description>
                        <h4>Description:</h4>
                        {props.card.description}
                        <h4>Ingredients:</h4>
                        <p>{props.card.ingredients}</p>
                        <h4>Directions:</h4>
                        <p>{props.card.directions}</p>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <NavLink to={`/editrecipe/${props.card.id}`}><i className="far fa-edit cardIcons" onClick={()=>editRecipe()} /></NavLink>
                        <a onClick={() => props.deleteRecipe(props.card.id)}>
                            <i className="fas fa-trash-alt cardIcons"/>
                        </a>
                    </Card.Content>
                </Card>
         </div>
    )
}



export default connect(() => {}, {deleteRecipe}) (Recipe); 
