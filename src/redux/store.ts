import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import postsReducer from './reducers/postsReducer';
import thunk from 'redux-thunk';
import rickMortyReducer from './reducers/rickMortyReducer';


const rootReducer = combineReducers({
  postsReducer: postsReducer,
  rickMortyReducer: rickMortyReducer,

})


export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
})

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

const store: any = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



export default store;
