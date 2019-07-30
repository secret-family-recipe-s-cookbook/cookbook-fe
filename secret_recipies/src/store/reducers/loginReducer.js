import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE} from "../actions";

const initialState = {
    isLoadingLOGIN:false,
    successLOGIN:false,
    user:""
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
              ...state,
              isloadingLOGIN: true,
              successLOGIN: false
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              isloadingLOGIN: false,
              successLOGIN: true,
              user: action.payload
            };
          case LOGIN_FAILURE:
            return {
              ...state,
              isloadingLOGIN: false,
              successLOGIN: false,
              user: ""
            };
      
          default:
            return state;
    }
}