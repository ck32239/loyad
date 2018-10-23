let app=require('../app');
let supertest=require('supertest');
let chai=require('chai');
let assert=chai.assert;

let api = supertest('http://localhost:' + app.get('port'))

describe('1st integration test',()=>{
	context('integration context',()=>{
		it('integration 1st it',(done)=>{
			api.post('/teapi')
				.send({name:'ankita'})
				.set('Accept', 'application/json')
        		.expect('Content-Type', 'application/json')
        		.expect(200)
        		.end((err, response) => {
          			let expJSONObj = {
            			name:'ankita'
          			}
          			assert.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          			done()
        		})
		})
	})
})