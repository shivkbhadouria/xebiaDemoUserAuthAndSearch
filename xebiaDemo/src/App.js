import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducer/index';
import Auth from './screens/Auth';
import Search from './screens/Search';

const MainNavigator = createStackNavigator(
     {
          NAuth: Auth,
          NSearch: Search
     },
     {
         initialRouteName: 'NAuth',
         mode: 'card',
         headerMode: 'none',
         title: 'Home',
         headerTransitionPreset: 'uikit',
      }
);

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootStack = createAppContainer(MainNavigator);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  logger,
  thunk
)));

class App extends React.Component {
     render() {
       console.disableYellowBox = true;
       return (
         <Provider store={store}>
         <RootStack />
         </Provider>
       );
     }
}


export default App;