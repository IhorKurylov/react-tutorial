import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.js';
import { PostServices } from '../../services/apiServices.js';

const UserPosts = (props) => {
  const [ posts, setPosts ] = useState([]);
  const appContext = useContext(AppContext);
  useEffect(()=> {
    PostServices.getPosts(setPosts);
  },[])

  return(
    <div style={{width: '45%'}}>
      {/*<button onClick={handleDelete}>Delete First User</button>*/}
      {posts.map((post) => {
        // const author = appContext.users.filter((user)=> user.id === post.userId)[0]
        return (
          <div key={post.id} style={{border: '1px solid black', margin: 10}}>
            {/*<h1>{author?.name ? author.name : 'Author not found'}</h1>*/}
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
