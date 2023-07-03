import { PostServices } from '../../services/apiServices.js';
import { Endpoints } from '../../api/endpoints.js';
import axios from 'axios';
import { ThunkAction } from "redux-thunk";
import { AppStateType, PropertiesTypes } from "../store";
import { rickMortyActions, RickMortyActionsType } from "../reducers/rickMortyReducer";
import { Post } from "../reducers/postsReducer";


const { REACT_APP_BASEURL } = process.env;
const instance = axios.create({
  baseURL: REACT_APP_BASEURL,
});

export type PostThunkType = ThunkAction<void, AppStateType, unknown, PostActionsType>
export type PostActionsType = ReturnType<
  PropertiesTypes<typeof postActions>
  >
export const postActionTypes = {
  SET_POSTS: 'SET_POSTS',
  DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
}

export const postActions = {
  setPosts: (posts: Post[]) => ({
    type: postActionTypes.SET_POSTS,
    payload: posts
  }),
  deletePostById: (id: number | null) => ({
    type: postActionTypes.DELETE_POST_BY_ID,
    payload: id
  })
}

export const getPostsThunk = ():PostThunkType => (dispatch) =>{
  PostServices.getPosts(dispatch);
}


export const getPostsThunk2 = ():PostThunkType => async (dispatch) =>{
  try {
    let response = await instance.get(Endpoints.POST);
    dispatch(postActions.setPosts(response.data));
  } catch(e) {
  }
}


export const deletePostThunk = (id: number | null, fn: (arr: any) => void):PostThunkType => (dispatch) =>{
  const newArr = [1,2,3].filter(item => item>1)
  fn(newArr)
  dispatch(postActions.deletePostById(id))
}

