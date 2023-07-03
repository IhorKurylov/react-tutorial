import { configureStore } from '@reduxjs/toolkit'
import rickMortyReducer from './slices/RickMortySlice'

export const store = configureStore({
  reducer: {
    rickMorty: rickMortyReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
