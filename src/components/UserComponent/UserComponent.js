import { useLocation, useParams } from 'react-router-dom';

const UserComponent = ()=> {
   const {userId} = useParams();

   const location = useLocation()
   console.log(location);
   return(
     <div>USER with id {userId}</div>
   )
}
export default UserComponent
