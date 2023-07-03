import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Info } from "../../redux/reducers/rickMortyReducer";
import { RickMortyRTKService } from "../../services/apiServices";

export interface InitialStateRTK {
  info: Info | {},
  results: Character[]
}

const initialState: InitialStateRTK = {
  info: {},
  results: []
}
interface CharactersRTK {
  info: Info,
  results: Character[]
}

export const getFirstPageThunkRTK = createAsyncThunk(
  '/api/character',
  (data, { rejectWithValue })=> {
    return RickMortyRTKService.getCharachters()
      .then(resp => resp.data)
      .catch(e => rejectWithValue(e))
  }
)

export const getNextPageThunkRTK = createAsyncThunk(
  '/api/character?page=',
  async (url: string) => {
    try{
      const response = await RickMortyRTKService.getNextCharachters(url)
      return response.data
    }catch (e) {

    }
  }
)

export const RickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {},
  extraReducers: {
    [getFirstPageThunkRTK.fulfilled.type]: (state, action) => {
      state.results = action.payload.results
      state.info = action.payload.info
    },
    [getFirstPageThunkRTK.rejected.type]: (state, action)=>{
      console.log('Error', action)
    },
    [getNextPageThunkRTK.fulfilled.type]: (state, action) => {
      state.results = [
        ...state.results,
        ...action.payload.results
      ]
      state.info = action.payload.info
    },
    [getNextPageThunkRTK.rejected.type]: () => {
      console.log('Error')
    }
  }
})
// export const { getNextPage } = RickMortySlice.actions
export default RickMortySlice.reducer
