import axios from 'axios';

 const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://lambda-cook-book.herokuapp.com/api'
  });
};
export default axiosWithAuth;