import React from 'react';
import { ButtonContainer } from "../styled-components/Button";

function HomePage () {
    return(
        <div className='home-page'>
            <div className="top-content-image">
                <div className="top-content-text">
                    <h1>Create, Preserve, and</h1>
                    <h1>Share Your Precious</h1>
                    <h1>Family Recipes</h1>
                </div>
                <div className='top-content-button'>
                    <ButtonContainer className='create-recipe'>Create a Recipe</ButtonContainer>
                </div>
            </div>
        </div>
    )
};

export default HomePage;