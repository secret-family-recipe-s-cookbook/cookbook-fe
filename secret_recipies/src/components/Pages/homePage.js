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

            <div className='recipe-content-two featured'>
                <h1>Featured Family Recipes</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards'>
                    <div className='placeholder'>
                        <h3>Meatless Monday Recipes</h3>
                        <img src='https://i.imgur.com/xbAB1QK.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>4th of July Inspired Recipes</h3>
                        <img src='https://i.imgur.com/FAhghO2.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Family Meal Ideas for Under $20</h3>
                        <img src='https://i.imgur.com/JCYh3vh.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='recipe-content-one featured'>
                <h1>Recipe of the Day</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards-rotd'>
                    <div className='placeholder-rotd'>
                    <div>
                    <img src='https://i.imgur.com/sjvZeC7.jpg'/>
                    </div>
                    <div className='rotd-text'>
                        <h3>Grandma B's Apple Pie</h3>
                        <span>&#11088;&#11088;&#11088;&#11088;&#9734;   102 reviews</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                        <p>Ex ea commodo conequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recipe-content-two showcase'>
                <h1>Backyard Favorites</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards'>
                    <div className='placeholder'>
                        <h3>Mesquite-Smoked Burger</h3>
                        <img src='https://i.imgur.com/UxIOIie.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Grilled Chicen Skewers</h3>
                        <img src='https://i.imgur.com/cPDulux.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Southwest Babyback Ribs</h3>
                        <img src='https://i.imgur.com/lXUlSQF.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Grilled Corn on the Cob</h3>
                        <img src='https://i.imgur.com/ImbSC8X.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='recipe-content-one showcase'>
                <h1>Classic Dinners</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards'>
                    <div className='placeholder'>
                        <h3>Uncle John's Lasagnafest</h3>
                        <img src='https://i.imgur.com/h3XJ5ON.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Garlic and Herb Roasted Chicken</h3>
                        <img src='https://i.imgur.com/Nex1oyC.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Glazed Pork Chops and Potatoes</h3>
                        <img src='https://i.imgur.com/bPPI11s.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Nester's Famous White Pizza</h3>
                        <img src='https://i.imgur.com/4S1igns.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='recipe-content-two showcase'>
                <h1>Refreshing Summer Drinks</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards'>
                    <div className='placeholder'>
                        <h3>Tyson Family's Lemonade</h3>
                        <img src='https://i.imgur.com/N4bOC7i.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Strawberry Summer Splash</h3>
                        <img src='https://i.imgur.com/bvBJqQv.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Tropical Pineapple Breeze</h3>
                        <img src='https://i.imgur.com/CMquNgi.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Barry's Berry Smoothie</h3>
                        <img src='https://i.imgur.com/Dk9lwy3.jpg'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;