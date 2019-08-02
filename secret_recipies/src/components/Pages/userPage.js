import React, { Component, useState } from 'react';
import Recipes from '../Cards/recipes';
import { fetchCard } from '../../store/actions';
import { connect } from 'react-redux';
import { ButtonContainer } from "../styled-components/Button";
import { NavLink } from 'react-router-dom';
import SearchForm from '../SearchBar';


class userPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "recipe_image": " ",
                "title": " ",
                "description": " ",
                "ingredients": " ",
                "directions": " ",
                "Notes": " ",
                "source": " ",
                "bio": " ",
                "source_image": " " 
            }
            
        }
        console.log('data: ', this.state.data);
    }
    
    componentDidMount(){
        this.props.fetchCard();
    }
    
    render() {
        
        let recipesToDisplay = [];
        if (this.props.filteredRecipes.length > 0) {
            recipesToDisplay = this.props.filteredRecipes;
        }
        else {
            recipesToDisplay = this.props.data;
            
        }
        
        
        
        console.log('userPage props', this.props.data)
        return(
            <>
            <SearchForm />
                <div className='user-page'>
                    <div className='userPageTitle'>       
                        <h1>My Recipes</h1>
            <NavLink to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></NavLink>
                    </div>
                    <div className='no-recipe'>
                        
                        
                        <Recipes data={recipesToDisplay} setX={this.props.setX} />
                            
                        
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>   ({
    data: state.cardReducer.data.data,
    fetching: state.cardReducer.fetching,
    filteredRecipes: state.cardReducer.filteredRecipes,
    error: state.cardReducer.error
   })
  
  export default connect(mapStateToProps,{fetchCard}) (userPage);