import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import { Card, Icon, Image } from 'semantic-ui-react'


// const RecipeCard = ({recipe, openModal}) => {
    
//     return (
//         <div>
//             <h2>{recipe.title}</h2>
//             <p>{recipe.description}</p>
//             <p>{recipe.categories}</p>
//             <p>{recipe.prepTime}</p>
//             <p>{recipe.cookTime}</p>
//             <p>{recipe.servings}</p>
//             <p>{recipe.calories}</p>
//             <img url={recipe.image} alt="picture of food" />
//             <p>{recipe.ingredients}</p>
//             <p>{recipe.directions}</p>
//             <p>{recipe.notes}</p>
//             <p>{recipe.source}</p>
//             <p>{recipe.bio}</p>
//             <NavLink to={`/createrecipe/edit/${recipe.id}`}>Edit</NavLink> {'  '}
//             <div onClick={openModal}>Delete</div>
//         </div>
//     )
// }
// export default RecipeCard;


const RecipeCard = ({recipe, openModal}) => (
 
    <div className="card-grid-view">
        <div>
        <Card>
            <Image src={recipe.image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{recipe.categories}</span>
            </Card.Meta>
            <Card.Description>
            {recipe.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <NavLink to={`/createrecipe/edit/${recipe.id}`}> <Icon name='edit' /> Edit</NavLink>
                {" "}
                <a onClick={openModal}><Icon name='delete' /> Delete</a> 
            </Card.Content>
        </Card>
        </div>
    </div>
       
   
)

export default RecipeCard