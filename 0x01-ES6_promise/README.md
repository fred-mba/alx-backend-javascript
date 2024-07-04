## ES6 Promises

### Learning Objectives
1. Promises (how, why, and what)
* A promise is an object that manages asynchronous operations, such as querying a database, searching a file, gathering resources. You can wrap a promise object around(asynchronous code). It promises to return a value. That object will be PENDING -> RESOLVED or REJECTED
**Promise States**
- `Pending:` The initial state of a promise. It’s neither fulfilled nor rejected. The promise is still waiting to be resolved or rejected.

- `Fulfilled:` This state indicates that the promise has been successfully resolved. The operation was completed successfully, and the promise has a value (often referred to as the "resolved value").

- `Rejected:` This state indicates that the promise has failed. The operation encountered an error, and the promise has a reason for the rejection (often an error object or a message).

- `Settled:` A promise is considered settled when it is no longer pending; it has either been fulfilled or rejected. In other words, a promise is settled when its outcome is determined (either success or failure).

2. [How to use the then, resolve, catch methods](https://www.youtube.com/watch?v=NOzi4wBHn0o)
- `.then`: This method returns a new promise, enabling chaining. 1st argument is a function executed if the promise is fulfilled. The 2nd argument is a function executed if the promise is rejected.
- `.catch`: The method handles rejections, and centralize error handling and avoid redundancy
- `finally`: Performs actions after promise is settled regardless of itss outcome, usually for cleanup.

3. How to use every method of the Promise object
* [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
* [Promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
* [Promise.any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
* [Promise.race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

4. [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
5. The [await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
6. How to use an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
