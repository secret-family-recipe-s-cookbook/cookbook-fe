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
                const feedMe = response.data.meals
                setRecipeOfTheDay(feedMe)
            })
            .catch(err => {
                console.log("error", err)
            })
    },[])
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
                        Try our Meatless Monday recipes! It’s a healthy alternative that the whole family can enjoy. You’ll never know the difference!
                        </p>
                    </div>
                    <div className='placeholder'>
                        <h3>4th of July Inspired Recipes</h3>
                        <img src='https://i.imgur.com/FAhghO2.jpg'/>
                        <p>4th of July is one of the most anticipated holidays of the year. Check out some great 4th of July inspired recipes.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Family Meal Ideas for Under $20</h3>
                        <img src='https://i.imgur.com/JCYh3vh.jpg'/>
                        <p>Family meals don’t have to be expensive. Here are some grea family meal ideas for under $20.</p>
                    </div>
                </div>
            </div>
            <div className='recipe-content-one featured'>
                <h1>Recipe of the Day</h1>
                {/* Placeholder Cards */}
                <div className='temp-cards-rotd'>
                    <div className='placeholder-rotd'>
                    <div>
                        {recipeOfTheDay ? <img src={recipeOfTheDay[0].strMealThumb}/> : <h3>Loading</h3>}
                    </div>
                    <div className='rotd-text'>
                        {recipeOfTheDay ? <h3>{recipeOfTheDay[0].strMeal}</h3> : <h3>Loading</h3>}
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
                        <p>Family meals don’t have to be expensive. Here are some grea family meal ideas for under $20.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Grilled Chicen Skewers</h3>
                        <img src='https://i.imgur.com/cPDulux.jpg'/>
                        <p>Try our recipe for simple, yet delicious grilled chicken skewers. Easy to make. Fun to eat!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Southwest Babyback Ribs</h3>
                        <img src='https://i.imgur.com/lXUlSQF.jpg'/>
                        <p>You can never go wrong with these mouth-watering Southwest Babyback Ribs! Grab them while you can!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Grilled Corn on the Cob</h3>
                        <img src='https://i.imgur.com/ImbSC8X.jpg'/>
                        <p>For all my corn lovers! Here’s an amazing Grilled Corn on the Cob recipe.</p>
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
                        <p>Uncle John swears by his lasagna. So much that when he cooks it, we call it a lasagna fest. Try out his recipe and join in on the festivities!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Garlic and Herb Roasted Chicken</h3>
                        <img src='https://i.imgur.com/Nex1oyC.jpg'/>
                        <p>An amazingly juicy garlic and herb roasted chicken recipe. There’s never a bite left on the table</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Glazed Pork Chops and Potatoes</h3>
                        <img src='https://i.imgur.com/bPPI11s.jpg'/>
                        <p>Can’t say enough about these glazed pork chops & sauteed potatoes. The flavors are out of this world!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Nester's Famous White Pizza</h3>
                        <img src='https://i.imgur.com/4S1igns.jpg'/>
                        <p>Everyone in the neighborhood wants a taste of Nester’s pizza! Papa John’s ain’t got nothin’ on Nester!</p>
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
                        <p>Summer isn’t summer without the Tyson’s family’s homemade lemonade. Freshly squeezed!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Strawberry Summer Splash</h3>
                        <img src='https://i.imgur.com/bvBJqQv.jpg'/>
                        <p>An amazing carbonated strawberry drink that’s light and refreshing. A must-recipe!</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Tropical Pineapple Breeze</h3>
                        <img src='https://i.imgur.com/CMquNgi.jpg'/>
                        <p>A tropical-flavored drink that will take you right to the islands. Layers of tropical goodness.</p>
                    </div>
                    <div className='placeholder'>
                        <h3>Barry's Berry Smoothie</h3>
                        <img src='https://i.imgur.com/Dk9lwy3.jpg'/>
                        <p>Nothing’s better than Barry’s Berry Smoothie. Cool, refreshing, and delicious.</p>
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