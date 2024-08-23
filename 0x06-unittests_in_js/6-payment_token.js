/**
 * The getPaymentTokenFromAPI function takes an argument `success`(boolean)
 * When success is true, it should return a resolved promise with
 * the object {data: 'Successful response from the API' },
 * Otherwise, the function is doing nothing
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});
module.exports = getPaymentTokenFromAPI;
