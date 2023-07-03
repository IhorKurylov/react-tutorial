import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent.jsx';
import { createContext, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

const title = 'Users list';
export const UsersContext = createContext(null);

export const AppContext = createContext(null);

const App = () => {
  const [ show, setShow ] = useState(true);
  const [ users, setUsers ] = useState([]);
  const [ count, setCount ] = useState(0)

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
      <Outlet />
      <AppContext.Provider value={{info, users, setUsers}}>
        <UsersComponent/>
      </AppContext.Provider>







      {/*/!*</AppContext.Provider>*!/*/}
      {/*/!*<LoginPage />*!/*/}
      {/*/!*{show && <Car />}*!/*/}
      {/*/!*{show && <CarFunc users={users}/>}*!/*/}
      {/*/!*<UseMemoContainer/>*!/*/}

    </div>
  );
};

export default App;
