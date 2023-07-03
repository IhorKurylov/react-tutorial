import { PostServices } from '../../services/apiServices.js';
import { Endpoints } from '../../api/endpoints.js';
import axios from 'axios';


const { REACT_APP_BASEURL } = process.env;
const instance = axios.create({
  baseURL: REACT_APP_BASEURL,
});


export const userActionTypes = {
  SET_POSTS: 'SET_POSTS',
  DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
}

export const userActions = {
  setPosts: (posts) => ({
    type: userActionTypes.SET_POSTS,
    payload: posts
  }),
  deletePostById: (id) => ({
    type: userActionTypes.DELETE_POST_BY_ID,
    payload: id
  })
}

export const getPostsThunk = () => (dispatch) =>{
  PostServices.getPosts(dispatch);
}




export const getPostsThunk2 = () => async (dispatch) =>{
  try {
    let response = await instance.get(Endpoints.POST);
    dispatch(userActions.setPosts(response.data));
  } catch(e) {
  }
}




export const deletePostThunk = (id, fn) => (dispatch) =>{
  const newArr = [1,2,3].filter(item => item>1)
  fn(newArr)
  dispatch(userActions.deletePostById(id))
}

