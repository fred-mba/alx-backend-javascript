export default function handleResponseFromAPI(promise) {
  return promise
    // when resolved, return the response object
    .then(() => ({ status: 200, body: 'success' })
    // when rejected return an empty Error object
    .catch(() => new Error())
    // log the message to the console for every resolution
    .finally(() => console.log('Got a response from the API'));
}
