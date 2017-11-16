var add = require('../add');
var sub = require('../sub');

var expect = require('chai').expect;
//console.log(add(1,1));

describe('A add() Function Test',function(){
	it('1+1=2',function(){
		expect(add(1,1)).to.be.equal(2);
	});
	it('1+0=1',function(){
		expect(add(1,0)).to.be.equal(1); //一条断言 assertion
	});
});

describe('A sub() Function Test',function(){
	it('1-1=0',function () {
		expect(sub(1,1)).to.be.equal(0);
    })
})

// describe:test suite 测试套件
// it:test case 测试用例