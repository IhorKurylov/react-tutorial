import { useEffect } from 'react';
import { RickMortyService } from '../../services/apiServices.js';
import { useDispatch, useSelector } from 'react-redux';
import { getRMNextPageThunk, getRMThunk } from '../../redux/reducers/rickMortyReducer.js';

const RickMortyPage = () => {
  const dispatch = useDispatch();
  const getCharacters = () => dispatch(getRMThunk());
  const getNextCharacters = (url) => dispatch(getRMNextPageThunk(url));
  const characters = useSelector((store) => store.rickMortyReducer.results);
  const info = useSelector((store) => store.rickMortyReducer.info);

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div >
      <button onClick={()=>getNextCharacters(info?.next)}>GEt more</button>
      {characters.map((item) => (
        <div key={item.id} style={{border: '1px solid blue', margin: 15}}>
          <img style={{width: 100, height: 100}} src={item.image} alt=""/>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RickMortyPage;
