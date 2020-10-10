const axios = require('axios')

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

const getPosts = async () => {
  const { data } = await api.get("/posts");

  console.log('get on api')

  return data || [];
};

module.exports = {
  getPosts,
}