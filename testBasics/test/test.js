 var code = require('../main');
  var expect = require('chai').expect;

  // describe('', function() {
  //   it('');
  // });

  describe("Hello World", function() {
  it("should say 'Hello, World!' when ran", function() {
    expect(code.helloWorld()).to.equal("Hello, World!");
  });
});