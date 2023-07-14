import UserCard from '../UserCard/UserCard.js';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App.js';
import { UserServices } from '../../services/apiServices.js';

const UsersComponent = () => {
  const handleClick = (user) => console.log(user.name);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    UserServices.getUsers(setUsers);
  }, []);


  return (
    <div style={{width: '45%'}}>
      {users?.map((user) =>
        <UserCard
          key={user.id}
          user={user}
          handleClick={handleClick}
          info={'info'}
        />
      )}
    </div>
  );
};


export default UsersComponent;
