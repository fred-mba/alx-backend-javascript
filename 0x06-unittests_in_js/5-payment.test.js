/**
 * `Describe` contains two tests:
 * The first test will call sendPaymentRequestToAPI with 100, and 20:
 * - Verify that the console is logging the string The total is: 120
 * - Verify that the console is only called once
 * The second test will call sendPaymentRequestToAPI with 10, and 10:
 * - Verify that the console is logging the string The total is: 20
 * - Verify that the console is only called once
 */
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it('should verify console.log was called once with the string: The total is: 120', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
  it('should verify console.log was called once with the string: The total is: 20', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
