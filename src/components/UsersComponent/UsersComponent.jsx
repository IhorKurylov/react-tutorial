import UserCard from '../UserCard/UserCard.js';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App.js';

const UsersComponent = () => {
  const handleClick = (user) => console.log(user.name);

  const appContext = useContext(AppContext);
  return (
    <div style={{width: '45%'}}>
      {appContext.users?.map((user) =>
        <UserCard
          key={user.id}
          user={user}
          handleClick={handleClick}
          info={appContext.info}
        />
      )}
    </div>
  );
};


export default UsersComponent;
