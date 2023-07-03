import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import postsReducer from './reducers/postsReducer.js';



const rootReducer = combineReducers({
  postsReducer: postsReducer,
  // users: usersReducer,
})

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers());

export default store;
