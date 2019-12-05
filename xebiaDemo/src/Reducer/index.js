import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SearchReducer from './SearchReducer'



 const appReducer = combineReducers({
    AuthReducer: AuthReducer,
    SearchReducer: SearchReducer,
  });

  const rootReducer = (state, action) => {
       return appReducer(state, action)
  }
  
    
  
  export default rootReducer;