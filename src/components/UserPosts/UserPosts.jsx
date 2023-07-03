import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.js';
import { Outlet } from 'react-router-dom';
import { PostServices } from '../../services/apiServices.js';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/action/postsAction.js';

const UserPosts = () => {
  const posts = useSelector((store)=>store.postsReducer.posts)
  const store = useSelector((store) => store)
  const dispatch = useDispatch()



  useEffect(()=> {
    PostServices.getPosts(dispatch);
  },[])


  const handleDeletePost = (id) => {
    dispatch(userActions.deletePostById(id))
  }

  return(
    <div style={{width: '45%'}}>
      <Outlet/>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
            <button onClick={()=>handleDeletePost(post.id)}>Delete</button>
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
