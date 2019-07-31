import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false,    
}

export const cardReducer =(state = initialState, action) => {
    console.log('reducer state', state)
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case FETCH_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_SUCCESS:
            return{...state, error:action.payload, fetching:false};
        default:
            return state
    }
}
