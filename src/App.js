import './App.css';
import MainComponent from './MainComponent.js';

const title = <h1>Title</h1>;

const App = () => {
  const mainTitle = 'Main Component Title';
  return (
    <div className="app">
      <h1 className='link'>{title}</h1>
      <MainComponent title={mainTitle} subtitle='subtitle'/>
    </div>
  );
};

export default App;
