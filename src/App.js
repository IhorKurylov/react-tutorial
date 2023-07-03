import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent.jsx';
import { createContext, useState, useEffect } from 'react';
import UserPosts from './components/UserPosts/UserPosts.jsx';

const title = 'Users list';
export const UsersContext = createContext(null);

export const AppContext = createContext(null);

const App = () => {
  const [ show, setShow ] = useState(true);
  const [ users, setUsers ] = useState([]);


  const info = "Company name";
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      setUsers(data);
    } catch {
    }
  };

  return (
    <div className="app">
      <h1 className="link">{title}</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <AppContext.Provider value={{info, users, setUsers}}>
          <UsersComponent />
          <UserPosts />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
