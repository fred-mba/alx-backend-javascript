/**
 * Validates if Utils.calculateNumber is equal to sendPaymentRequestToApi
 * 1. Check if calculateNumberSpy was called once
 * 2. Check if calculateNumberSpy was called with correct arguments
 * 3. Restore the original function after the test to avoid side effects on other tests
 */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of Utils.calculateNumber function', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});
