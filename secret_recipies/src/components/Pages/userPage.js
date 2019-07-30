import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipies from '../Cards/recipies';
import { ButtonContainer } from "../styled-components/Button";


function UserPage (props) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get(
                'https://lambda-cook-book.herokuapp.com/api'
            )
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });
    }, []);

    if (!data) {
      
    return(
        <div className='home-page'>
            <div className='hp-title'>       
                <h1>My Recipes</h1>
            </div>
            <div className='no-recipe'>
                <div>
            <img src='https://cdn3.vectorstock.com/i/thumb-large/32/82/frying-pan-glyph-icon-kitchen-and-cooking-fry-vector-20903282.jpg'></img>
            </div>
                <div>
                    <h1>Oh no!</h1>
                    <h3>user hasn't created a recipe yet.</h3>
                    <ButtonContainer className="signUpSubmit">Create a Recipe</ButtonContainer>
                </div>
            </div>
        </div>
    )
}

const { recipe } = data;
    return(
        <>
        <div className='my-recipes'>
            <div className='hp-title'>       
                <h1>My Recipes</h1>
            </div>
            <ButtonContainer className="signUpSubmit">Add Recipe</ButtonContainer>
        </div>
        <Recipies data={recipe} />
        </>
    )
}

export default UserPage