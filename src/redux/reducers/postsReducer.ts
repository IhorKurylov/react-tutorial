import { postActions, postActionTypes } from '../action/postsAction';
import { Character } from "./rickMortyReducer";
import { PropertiesTypes } from "../store";

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface InitialState {
  posts: Post [] | [],
}

const initialState: InitialState = {
  posts: [],
}


export type PostsActionsType = ReturnType<PropertiesTypes<typeof postActions>>

const postsReducer = (state = initialState, action: PostsActionsType) => {
  switch (action.type) {
    case postActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case postActionTypes.DELETE_POST_BY_ID:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
    default:
      return state
  }
}

export default postsReducer;
