import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent.jsx';
import { useState } from 'react';

const title = 'Users list';

const App = () => {
  const [ show, setShow ] = useState(true);
  const title = 'Users list';

  return (
    <div className="app">
      <h1 className="link">{title}</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        {show && <UsersComponent />}
      </div>
    </div>
  );
};

export default App;
