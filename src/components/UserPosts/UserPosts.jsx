import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.js';

const UserPosts = (props) => {
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
  const handleDelete = () => {
    // const newUsers = [...appContext.users]
    // newUsers.shift()
    // appContext.setUsers(newUsers);

    appContext.setUsers((prevState)=>{
      const newUsers = [...prevState]
      newUsers.shift()
      return newUsers
    })
  }

  return(
    <div style={{width: '45%'}}>
      <button onClick={handleDelete}>Delete First User</button>
      {posts.map((post) => {
        const author = appContext.users.filter((user)=> user.id === post.userId)[0]
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
            <h1>{author?.name ? author.name : 'Author not found'}</h1>
            <h4>{post.title}</h4>
            <span>{props.info}</span>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}
export default UserPosts;
