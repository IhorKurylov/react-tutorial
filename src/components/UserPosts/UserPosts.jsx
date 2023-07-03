import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.js';
import { Outlet } from 'react-router-dom';
import { PostServices } from '../../services/apiServices.js';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostThunk, getPostsThunk2,  getPostsThunk, userActions } from '../../redux/action/postsAction.js';
import store from '../../redux/store.js';

const UserPosts = () => {
  const posts = useSelector((store)=>store.postsReducer.posts)
  const dispatch = useDispatch();
  const getPosts = () => dispatch(getPostsThunk())
  const getPosts2 = () => dispatch(getPostsThunk2())
  const handleDeletePost = (id, fn) => dispatch(deletePostThunk(id, fn))

  useEffect(()=> {
    // getPosts()
    getPosts2()
  },[])

  const sayHi = (value) => alert(value)

  return(
    <div style={{width: '45%'}}>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
            <button onClick={()=>handleDeletePost(post.id, sayHi)}>Delete</button>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
      })}
      <Outlet/>
    </div>
  )
}
export default UserPosts;
