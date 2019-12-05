import * as actionTypes from '../Action';


const initialState = {
  response: {},
  error: '',
  isLoading: false
};

const SearchReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.ACTION_SEARCH:
    return {
      ...state,
      response:{},
      isLoading: true
    }
    case actionTypes.ACTION_SEARCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      response: action.value
    }
    case actionTypes.ACTION_SEARCH_FAIL:
    return {
      ...state,
      isLoading: false
    }
    default:
  return state;
  }

}
export default SearchReducer;
