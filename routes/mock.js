const axios = require('axios');

let api = axios.create({
  baseURL:'https://api.github.com'
});


module.exports = {
  getUser(user) {
    return api
      .get('/users/' + user)
      .then(res => res.data)
      .catch(error => console.log(error));
   }
}