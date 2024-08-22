/**
 * Contains test case of calculateNumber function
 * Can assume a and b are always numbers
 * Testes should be around the "rounded" part
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers a, b', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1.5, 2.4), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
        assert.strictEqual(calculateNumber(2.8, -3.2), 0);
    });
    it('should handle combined positive and negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.3, 2.9), 2);
        assert.strictEqual(calculateNumber(2.6, -3.4), 0);
    });
});