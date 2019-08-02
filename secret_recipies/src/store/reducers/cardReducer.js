import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_START, EDIT_START, DELETE_START, SEARCH_RECIPE} from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false,
    filteredRecipes: [],    
}

export const cardReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case ADD_START:
            return{...state, fetching:true};
        case EDIT_START:
            return {...state, error:'',fetchingData: true};
        case DELETE_START:
            return {...state, error:'', fetchingData: true}
        case FETCH_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_SUCCESS:
            return{...state, error:action.payload, fetching:false};
            case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        default:
            return state
    }
}
