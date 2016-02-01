  var code = require('../main');
  var expect = require('chai').expect;

  // describe('Leap Year', function() {
  //   it('years divisible by 4 are leap years', function(){
  //     expect(code.leapYear(24)).to.equal('That is a leap year!');
  //   });
  // });

  //   describe('Leap Year', function() {
  //   it('year are divisible by 100 but not 400', function(){
  //     expect(code.leapYear(440)).to.equal('That is a leap year!')
  //    });
  //   });

     describe('Leap Year', function() {
    it('That is not a leap year!', function(){
      expect(code.leapYear(800)).to.equal('That is not a leap year!');
     });
    });