import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import postsReducer from './reducers/postsReducer.js';
import thunk from 'redux-thunk';
import rickMortyReducer from './reducers/rickMortyReducer.js';


const rootReducer = combineReducers({
  // postsReducer: postsReducer,
  rickMortyReducer: rickMortyReducer,

})

export type AppStateType = ReturnType<typeof store.getState>;

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
