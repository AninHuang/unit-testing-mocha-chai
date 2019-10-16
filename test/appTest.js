const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', function() {
  it('app should return Hello', function() {
    let result = sayHello;
    assert.equal(result, 'Hello');
  });

  it('sayHello should return type string', function() {
    let result = sayHello;
    assert.typeof(result, 'string');
  });
});