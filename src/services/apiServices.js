import { baseUrl, Endpoints } from '../api/endpoints.js';
import axios from 'axios';
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
  getPosts: async (setPosts) => {
    try {
      let response = await instance.get(Endpoints.POST);
      setPosts(response.data);
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
