import { userActionTypes } from '../action/postsAction.js';
import { RickMortyService } from '../../services/apiServices.js';

const initialState = {
  info: {},
  results: []
};

export const rickMortyActionTypes = {
  GET_FIRST_PAGE: 'GET_FIRST_PAGE',
  GET_NEXT_PAGE: 'GET_NEXT_PAGE',
};
export const rickMortyActions = {
  getFirstPage: (data) => ({type: rickMortyActionTypes.GET_FIRST_PAGE, data}),
  getNextPage: (data) => ({type: rickMortyActionTypes.GET_NEXT_PAGE, data})
};

export const getRMThunk = () => (dispatch) => {
  RickMortyService.getCharachters(dispatch);
};

export const getRMNextPageThunk = (url) => (dispatch) => {
  RickMortyService.getNextCharachters(dispatch, url);
};


const rickMortyReducer = (state = initialState, action) => {
  switch (action.type) {
    case rickMortyActionTypes.GET_NEXT_PAGE: {
      return {
        ...state,
        info: action.data.info,
        results: [
          ...state.results,
          ...action.data.results
          ],
      };
    }
    case rickMortyActionTypes.GET_FIRST_PAGE: {
      return {
        ...state,
        info: action.data.info,
        results: action.data.results,
      };
    }
    default:
      return state;
  }
};

export default rickMortyReducer;
