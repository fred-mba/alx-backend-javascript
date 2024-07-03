export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: promise,
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise
    // when resolved, return the response object
    .then((response) => response)
    // when rejected return an empty Error object
    .catch(() => new Error())
    // log the message to the console for every resolution
    .finally(() => {
      console.log('Got a response from the API');
    });
}
