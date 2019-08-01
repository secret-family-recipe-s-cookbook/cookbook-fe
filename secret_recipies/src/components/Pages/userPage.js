import React, { Component } from 'react';
import Recipes from '../Cards/recipes';
import { fetchCard } from '../../store/actions';
import { connect } from 'react-redux';
import { ButtonContainer } from "../styled-components/Button";
import { Link } from 'react-router-dom';
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
        console.log('userPage props',this.props)
    }
    componentDidMount(){
        this.props.fetchCard();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.data.length !== this.props.data.length) {
    //         this.props.fetchCard()
    //     }
    // }
    render() {
        console.log('userPage props', this.props)
        return(
            <>
            <SearchForm />
                <div className='user-page'>
                    <div className='userPageTitle'>       
                        <h1>My Recipes</h1>
                    </div>
                    <div className='no-recipe'>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/pan.svg"} alt='User Page Image' className='userPageLogo' />
                        </div>
                        <div>
                        <Recipes data={this.props.data} setX={this.props.setX} />
                            <Link to={'/createrecipe'}><ButtonContainer className="userPageCreateButton">Add Another Recipe</ButtonContainer></Link>
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