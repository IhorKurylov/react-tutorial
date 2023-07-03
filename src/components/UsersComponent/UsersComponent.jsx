import UserCard from '../UserCard/UserCard.js';
import { useEffect, useState } from 'react';

const UsersComponent = () => {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    getUsers();
    // const interval = setInterval(()=> console.log(1))
    //
    // return () => {
    //   clearInterval(interval)
    // }
  }, []);

  useEffect(() => {
    console.log('useEffect');
  });

  useEffect(() => {
    console.log('users');
  }, [ users ]);

  const getUsers = async () => {
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUsers(data)
    } catch{}
  };

  const handleClick = (user) => console.log(user.name);

  return (
    <div style={{width: '45%'}}>
      {users?.map((user) =>
        <UserCard
          key={user.id}
          user={user}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};


export default UsersComponent;
