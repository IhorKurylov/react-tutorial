import UserCard from '../UserCard/UserCard.js';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App.js';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routing/AppRoutes.js';

const UsersComponent = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(AppRoutes.USERS + '/' + id);

  const appContext = useContext(AppContext);
  return (
    <div style={{width: '45%'}}>
      {appContext.users?.map((user) =>
        <UserCard
          key={user.id}
          user={user}
          handleClick={()=>handleClick(user.id)}
          info={appContext.info}
        />
      )}
    </div>
  );
};


export default UsersComponent;
