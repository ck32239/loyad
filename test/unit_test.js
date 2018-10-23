const chai=require('chai');
const expect=chai.expect;

const user=require('../routes/users');

describe('my 1st test describe',()=>{
	context('my 1st context',()=>{
		it('my 1st it',()=>{
			expect(user.myFunc(1)).to.equal(1);
		})
	})
})