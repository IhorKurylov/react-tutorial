import styles from './UserCard.module.css'
import { User } from "../../UsersPage";

interface Props {
  user: User
  handleClick: (u:User)=>void,
  info:  string
}
const UserCard = ({ user, handleClick, info }: Props ) => {
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
