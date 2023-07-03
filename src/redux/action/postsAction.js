export const userActionTypes = {
  SET_POSTS: 'SET_POSTS',
  DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
}

export const userActions = {
  setPosts: (posts) => ({type: userActionTypes.SET_POSTS, payload: posts}),
  deletePostById: (id) => ({type: userActionTypes.DELETE_POST_BY_ID, payload: id})
}
