import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character, getRMNextPageThunk, getRMThunk } from "../../redux/reducers/rickMortyReducer";



const RickMortyPage = () => {
  const dispatch = useDispatch();
  const getCharacters = () => dispatch(getRMThunk());
  const getNextCharacters = (url:string) => dispatch(getRMNextPageThunk(url));
  const characters: Character[] | [] = useSelector((store) => store.rickMortyReducer.results);
  const info = useSelector((store) => store.rickMortyReducer.info);
  const user = '';
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <button onClick={() => getNextCharacters(info?.next)}>GEt more</button>
      {characters?.map((item:Character) => (
        <div key={item.id} style={{border: '1px solid blue', margin: 15}}>
          <img style={{width: 100, height: 100}} src={item.image} alt=""/>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RickMortyPage;
