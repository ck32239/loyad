let app=require('../app');
const expect = require('chai').expect;
const nock = require('nock');
const supertest=require('supertest');

const api = supertest('http://localhost:' + app.get('port'))
const getUser = require('../routes/mock').getUser;
const response = require('../res');

describe('Get User tests', () => {
  before(() => {
    //Here instead of octocat server response, you are sending respinse from res file
    nock('https://api.github.com')
      .get('/users/octocat')
      .reply(200, response)
  });

  it('Get a user by username', (done) => {

    api.get('/coffeeapi/octocat')
      .expect(200)
      .end((err, res) => {
        //expect an object back
        expect(typeof res).to.equal('object');

        //Test result of login and id for the response
        expect(res.body.login).to.equal('ck32239')
        expect(res.body.id).to.equal(1)
        done();
      })
  });
});