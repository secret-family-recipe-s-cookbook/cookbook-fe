import React from 'react';


function UserPage () {
    return(
        <div className='home-page'>
            <div className='user-title'>
                <h1>My Recipes</h1>
            </div>
            <div className='no-recipe'>
                <div>
                    <img src='https://cdn3.vectorstock.com/i/thumb-large/32/82/frying-pan-glyph-icon-kitchen-and-cooking-fry-vector-20903282.jpg'></img>
                </div>
            </div>
            <div>
                <h1>Oh no!</h1>
                <h3>user hasn't created a recipe yet</h3>
                <button>Create a Recipe</button>
            </div>
        </div>

    )
}

export default UserPage