import { userActionTypes } from '../action/postsAction.js';

const initialState = {
  posts: [],
}

const postsReducer = (state=initialState, action) => {
  switch(action.type){
    case userActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case userActionTypes.DELETE_POST_BY_ID:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
    default:
      return state
  }
}

export default postsReducer;
