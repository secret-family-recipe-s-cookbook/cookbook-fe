import React, { Component } from 'react';
import Recipes from '../Cards/recipes';
import { fetchCard } from '../../store/actions';
import { connect } from 'react-redux';
import { ButtonContainer } from "../styled-components/Button";
import { Link } from 'react-router-dom';

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
    }
    componentDidMount(){
        this.props.fetchCard();
    }
    render() {
        console.log('userPage props', this.props)
        return(
            <>
                <div className='user-page'>
                    <div className='userPageTitle'>       
                        <h1>My Recipes</h1>
                    </div>
                    <div className='no-recipe'>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='User Page Image' className='userPageLogo' />
                        </div>
                        <div>
                        <Recipes data={this.props.data} />
                            <Link to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Create a Recipe</ButtonContainer></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>   ({
    data: state.cardReducer.data.data,
    fetching: state.cardReducer.fetching,
    error: state.cardReducer.error
   })
  
  export default connect(mapStateToProps,{fetchCard}) (userPage);