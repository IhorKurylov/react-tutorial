import UserCard from '../UserCard/UserCard';
import { useContext, useEffect, useState } from 'react';
import { AppContext, User } from '../../UsersPage';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routing/AppRoutes.js';

const UsersComponent = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => navigate(AppRoutes.USERS + '/' + id);

  const appContext: AppContext | null = useContext(AppContext);
  return (
    <div style={{width: '45%'}}>
      {appContext?.users?.map((user:User) =>
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
