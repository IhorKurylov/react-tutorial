import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostThunk, getPostsThunk2,  getPostsThunk } from '../../redux/action/postsAction';
import { Post } from "../../redux/reducers/postsReducer";
import { AppDispatch, AppStateType } from "../../redux/store";

const UserPosts = () => {
  const posts:Post[] | [] = useSelector((store:AppStateType) => store.postsReducer.posts)
  const dispatch: AppDispatch = useDispatch();
  const getPosts = () => dispatch(getPostsThunk())
  const getPosts2 = () => dispatch(getPostsThunk2())
  const handleDeletePost = (id: number | null, fn: (value: string)=> void) => dispatch(deletePostThunk(id, fn))

  useEffect(()=> {
    // getPosts()
    getPosts2()
  },[])

  const sayHi = (value: string) => alert(value)

  return(
    <div style={{width: '45%'}}>
      {posts.map((post:Post) => {
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
            <button onClick={()=>handleDeletePost( 'id' in post ? post.id : null, sayHi)}>Delete</button>
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
