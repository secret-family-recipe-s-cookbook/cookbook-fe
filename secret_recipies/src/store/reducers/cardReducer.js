import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

export const initialState = {
    recipies: [],
    error:'',
    fetchingData:false,    
}

export const cardReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case FETCH_SUCCESS:
            return{...state, recipies:action.payload, fetching:false};
        case FETCH_SUCCESS:
            return{...state, error:action.payload, fetching:false};
        default:
            return state
    }
}
