export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Data fetched successfully.');
    } else {
      reject(new Error('Failed to fetch data.'));
    }
  });
  return myPromise;
}
