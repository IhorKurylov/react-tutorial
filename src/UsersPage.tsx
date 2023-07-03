import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent';
import React, { createContext, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs:string,
  }
}

export interface AppContext {
  info: string,
  users: User[],
  setUsers:  React.Dispatch<React.SetStateAction<never[]>>
}
export const AppContext = createContext<AppContext | null>(null);

const UsersPage = () => {
  const [ show, setShow ] = useState<boolean>(true);
  const [ users, setUsers ] = useState([]);
  const [ count, setCount ] = useState<number>(0)

  const info: string = "Company name";

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

export default UsersPage;
