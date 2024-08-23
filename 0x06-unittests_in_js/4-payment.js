/**
 * Utilizes calculateNumber function from Utils module
 * Logs out the sum of totalAmount and totalShipping to the console
 */
const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}
module.exports = sendPaymentRequestToApi;
