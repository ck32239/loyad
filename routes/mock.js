let supertest=require('supertest');
let api = supertest('https://api.github.com')


module.exports = {
  getUser(username) {
    return api
      .get('/users/octocat')
      .then(res => res.data)
      .catch(error => console.log(error));
   }
}