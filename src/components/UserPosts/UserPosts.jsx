import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.js';
import { Outlet } from 'react-router-dom';

const UserPosts = () => {
  const [ posts, setPosts ] = useState([]);
  const appContext = useContext(AppContext);
  useEffect(()=> {
    getPosts();
  },[])
  const getPosts = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      setPosts(data);
    } catch {
    }
  };

  return(
    <div style={{width: '45%'}}>
      <Outlet/>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
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
