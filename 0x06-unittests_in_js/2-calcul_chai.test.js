/**
 * Rewriten test suite using `expect` from `Chai`
 * SUM: Tests addition of rounded numbers
 * SUBTRACT: Tests the subtraction of rounded numbers
 * DIVIDE: Tests the division of rounded numbers and handles zero division error
 */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers a, b', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.2, -3.7)).to.equal(-3);
    expect(calculateNumber('SUM', -2.6, -0.4)).to.equal(-3);
  });
  it('should handle the subtraction of rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.2, -3.7)).to.equal(5);
    expect(calculateNumber('SUM', -2.6, -0.4)).to.equal(-3);
  });
  it('should handle combined positive and negative numbers', () => {
    expect(calculateNumber('DIVIDE', -1.3, 2.9)).to.equal(-0.3333333333333333);
    expect(calculateNumber('DIVIDE', 2.6, -3.4)).to.equal(-1);
    expect(calculateNumber('DIVIDE', -2.6, -0.4)).to.equal('Error');
  });
});
