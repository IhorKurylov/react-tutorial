import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent.jsx';
import { createContext, useState, useEffect } from 'react';
import UserPosts from './components/UserPosts/UserPosts.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

const title = 'Users list';
export const UsersContext = createContext(null);

export const AppContext = createContext(null);

const App = () => {
  return (
    <div className="app">
      <h1 className="link">{title}</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        {/*<LoginPage />*/}
        {/*<UserPosts />*/}
        <UsersComponent />
      </div>
    </div>
  );
};

export default App;
