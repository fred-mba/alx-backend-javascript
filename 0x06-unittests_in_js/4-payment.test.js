/**
 * Validates if Utils.calculateNumber is equal to sendPaymentRequestToApi
 * 1. Check if calculateNumberSpy was called once
 * 2. Check if calculateNumberSpy was called with correct arguments
 * 3. Restore the original function after the test to avoid side effects on other tests
 */
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const sendPaymentRequestToApiStub = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of Utils.calculateNumber function', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});

describe('sendPaymentRequestToApiStub', () => {
  it('should stub Utils.calculateNumber function to always return same number 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApiStub(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
