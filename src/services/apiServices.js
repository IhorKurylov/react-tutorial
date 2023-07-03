import { baseUrl, Endpoints } from '../api/endpoints.js';
import axios from 'axios';
import { postActions } from '../redux/action/postsAction';
import { rickMortyActions } from '../redux/reducers/rickMortyReducer';
const { REACT_APP_BASEURL } = process.env

export const AuthServices = {
  handleLogin: (data) => {
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((resData) => console.log(resData));
  },
}
const instance = axios.create({
  baseURL: REACT_APP_BASEURL,
});

const rickMortyInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});


export const RickMortyService ={
  getCharachters: (dispatch) => {
    rickMortyInstance.get('character')
      .then(response => dispatch(rickMortyActions.getFirstPage(response.data)))
  },
  getNextCharachters: (dispatch, url) => {
    axios.get(url)
      .then(response => dispatch(rickMortyActions.getNextPage(response.data)))
  }
}

export const RickMortyRTKService ={
  getCharachters: () => {
    return rickMortyInstance.get('charactererw')
  },
  getNextCharachters: (url) => {
    return axios.get(url)
  }
}










// const tokenInstance = (token) => axios.create({
//   baseURL: REACT_APP_BASEURL,
//   headers:{
//     Authorization: `Bearer ${token}`
//   }
// });
//
// export const PostServices1 = {
//   getPosts: async (setPosts) => {
//     const token = ''
//     try {
//       let response = await tokenInstance(token).get(REACT_APP_BASEURL + Endpoints.POST);
//       setPosts(response.data);
//     } catch {
//     }
//   }
// }

export const PostServices = {
  getPosts: async (dispatch) => {
    try {
      let response = await instance.get(Endpoints.POST);
      dispatch(postActions.setPosts(response.data));
    } catch {
    }
  }
}

export const UserServices = {
  getUsers: async (setUsers) => {
    try {
      let response = await instance.get(Endpoints.USERS);
      console.log(response);
      setUsers(response.data);
    } catch {
    }
  }
}
