import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import uniReducer from './reducers/uniReducer';
  
// Its API is { subscribe, dispatch, getState }.
let store = createStore(uniReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;