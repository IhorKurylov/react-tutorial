import styles from './UserCard.module.css';
import { useContext } from 'react';
import { UsersContext } from '../../App.js';

const UserCard = (props) => {
  const { user, handleClick, info } = props;

  return (
    <div className={styles.wrapper} onClick={()=>handleClick(user)}>
      <h1 style={{textAlign: 'start'}}>
        {user.name}
      </h1>
      <h2 style={{textAlign: 'start'}}>
        {user.username}
      </h2>
      <h3 style={{textAlign: 'start'}}>
        {info}
      </h3>
      <p>{user.phone}</p>
    </div>
  );
};


export default UserCard;
