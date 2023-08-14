import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character, getRMNextPageThunk, getRMThunk, Info } from "../../redux/reducers/rickMortyReducer";
import { AppDispatch, AppStateType } from "../../redux/store";
import { RickMortyRTKService } from "../../services/apiServices";



const RickMortyPage = () => {
  const dispatch: AppDispatch  = useDispatch();
  const characters: Character[] | [] = useSelector((store:AppStateType) => store?.rickMortyReducer?.results);
  const info = useSelector((store: AppStateType):Info | {} => store?.rickMortyReducer?.info);


  useEffect(() => {
    dispatch(getRMThunk())
  }, []);


  return (
    <div>
      <button onClick={()=> dispatch(getRMNextPageThunk('next' in info ? info.next : ''))}>GEt more</button>
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
