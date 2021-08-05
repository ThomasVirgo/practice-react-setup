import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

function myReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }
  
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(myReducer, devToolsEnhancer());

  export default store;