import React,{ useEffect, useState } from 'react';
import axios from "axios";
import { ButtonContainer } from "../styled-components/Button";
import {NavLink} from 'react-router-dom'


function HomePage () {
    const [recipeOfTheDay, setRecipeOfTheDay] = useState();
    useEffect(()=>{
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => {
                console.log("food of the day", response)
                const feedMe = response.data.meals
                console.log("this is food", feedMe)
                setRecipeOfTheDay(feedMe)
            })
            .catch(err => {
                console.log("error", err)
            })
    },[])
    if(recipeOfTheDay){console.log('another food', recipeOfTheDay[0].strInstructions)}
    return(
        <div className='home-page'>
            <div className="top-content-image">
                <div className="top-content-text">
                    <h1>Create, Preserve, and</h1>
                    <h1>Share Your Precious</h1>
                    <h1>Family Recipes</h1>
                </div>
                <div className='top-content-button'>
                <NavLink to="/login"><ButtonContainer className='create-recipe'>Create a Recipe</ButtonContainer></NavLink>
                </div>
            </div>

            <div className='recipe-content-two featured'>
                <h1>Featured Family Recipes</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards'>
                    <div className='placeholder'>
                        <h3>Meatless Monday Recipes</h3>
                        <img src='https://i.imgur.com/xbAB1QK.jpg'/>
                        <p>
                            Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. 
                            Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. 
                            Stir in the tomatoes, beef stock, tomato ketchup or Worcestershire sauce and seasoning. 
                            Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. 
                            Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. 
                            Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. 
                            Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.
                        </p>
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
                        {recipeOfTheDay ? <img src={recipeOfTheDay[0].strMealThumb}/> : <h1>Loading</h1>}
                    </div>
                    <div className='rotd-text'>
                        {recipeOfTheDay ? <h3>{recipeOfTheDay[0].strMeal}</h3> : <h1>Loading</h1>}
                        {/* <span>&#11088;&#11088;&#11088;&#11088;&#9734;   102 reviews</span> */}
                        
                       {recipeOfTheDay ? <p>{recipeOfTheDay[0].strInstructions}</p> : <h1>Loading</h1>}
                        
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

// Logo Icon Credit 
// <div>Icons made by 
//     <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from 
//     <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
//     <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
// </div>
export default HomePage;