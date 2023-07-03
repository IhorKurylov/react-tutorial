import { userActionTypes } from '../action/postsAction.js';
import { RickMortyService } from '../../services/apiServices.js';
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store";

export interface LocationOrigin {
  name: string,
  url: string,
}

export interface Character {
  created: string,
  episode: string[],
  gender: string,
  id: 1
  image: string,
  location: LocationOrigin,
  name: string,
  origin: LocationOrigin,
  species: string,
  status: string,
  typ: string,
  url: string,
}

interface Info {
  count: number,
  pages: number,
  next:string,
  prev: null | string
}

interface InitialState {
  info: Info | {},
  results: Character[]
}

interface Characters {
  info: Info,
  results: Character[]
}

const initialState: InitialState = {
  info: {},
  results: []
};

export enum rickMortyActionTypes {
  GET_FIRST_PAGE = 'GET_FIRST_PAGE',
  GET_NEXT_PAGE = 'GET_NEXT_PAGE',
};


export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type RickMortyActionsType = ReturnType<
  PropertiesTypes<typeof rickMortyActions>
  >

export type RickMortyThunkType = ThunkAction<Promise<void>, AppStateType, unknown, RickMortyActionsType>

export const rickMortyActions = {
  getFirstPage: (data: Characters) => ({type: rickMortyActionTypes.GET_FIRST_PAGE, data}),
  getNextPage: (data: Characters) => ({type: rickMortyActionTypes.GET_NEXT_PAGE, data})
};

export const getRMThunk = ():RickMortyThunkType => (dispatch) => {
  RickMortyService.getCharachters(dispatch);
};

export const getRMNextPageThunk = (url):RickMortyThunkType => (dispatch) => {
  RickMortyService.getNextCharachters(dispatch, url);
};


const rickMortyReducer = (state = initialState, action: RickMortyActionsType) => {
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
