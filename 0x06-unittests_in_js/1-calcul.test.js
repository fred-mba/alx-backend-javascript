/**
 * Contains test case of calculateNumber function
 * SUM: Tests addition of rounded numbers
 * SUBTRACT: Tests the subtraction of rounded numbers
 * DIVIDE: Tests the division of rounded numbers and handles zero division error
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers a, b', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.2, -3.7), -3);
    assert.strictEqual(calculateNumber('SUM', -2.6, -0.4), -3);
  });
  it('should handle the subtraction of rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, -3.7), 5);
    assert.strictEqual(calculateNumber('SUM', -2.6, -0.4), -3);
  });
  it('should handle combined positive and negative numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.3, 2.9), -0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 2.6, -3.4), -1);
    assert.strictEqual(calculateNumber('DIVIDE', -2.6, -0.4), 'Error');
  });
});
