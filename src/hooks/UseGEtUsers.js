import { useEffect } from 'react';

const useGetUsers = (count, setUsers) => {
  useEffect(()=>{
    count === 5 && getUsers();
  },[count])

  const getUsers = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      setUsers(data);
    } catch {
    }
  };

  return 'Ihor'
}
export default useGetUsers;
