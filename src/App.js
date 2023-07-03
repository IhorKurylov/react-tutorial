import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent.jsx';
import { createContext, useState, useEffect } from 'react';
import UserPosts from './components/UserPosts/UserPosts.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import Car from './components/ClassComponents/Car/Car.jsx';
import CarFunc from './components/FuncComponents/CarFunc/CarFunc.jsx';
import UseMemoContainer from './components/useMemoComponents/USeMemoContainer.js';
import UseGEtUsers from './hooks/UseGEtUsers.js';
import useGetUsers from './hooks/UseGEtUsers.js';

const title = 'Users list';
export const UsersContext = createContext(null);

export const AppContext = createContext(null);

const App = () => {
  const [ show, setShow ] = useState(true);
  const [ users, setUsers ] = useState([]);
  const [ count, setCount ] = useState(0)

  const info = "Company name";

  let name = useGetUsers(count, setUsers)
  useEffect(() => {
    // getUsers();
    setInterval(() => setCount((prevState) => prevState +1), 1000);
  }, []);



  return (
    <div className="app">
      <h1 className="link">{title} {count} {name}</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <AppContext.Provider value={{info, users, setUsers}}>
          <UsersComponent />
        {/*  <UserPosts />*/}
        {/*</AppContext.Provider>*/}
        {/*<LoginPage />*/}
        {/*{show && <Car />}*/}
        {/*{show && <CarFunc users={users}/>}*/}
        {/*<UseMemoContainer/>*/}
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
