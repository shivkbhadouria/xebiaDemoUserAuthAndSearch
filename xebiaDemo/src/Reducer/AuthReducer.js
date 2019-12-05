import * as actionTypes from '../Action';


const initialState = {
  response: {},
  error: '',
  isLoading: false
};

const AuthReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.ACTION_AUTHENTICATE:
    return {
      ...state,
      response:{},
      isLoading: true
    }
    case actionTypes.ACTION_AUTHENTICATE_SUCCESS:
    return {
      ...state,
      isLoading: false,
      response: action.value
    }
    case actionTypes.ACTION_AUTHENTICATE_FAIL:
    return {
      ...state,
      isLoading: false
    }
    default:
  return state;
  }

}
export default AuthReducer;
