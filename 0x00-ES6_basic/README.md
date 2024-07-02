## ES6 Basics

### Learning Objectives
1. What [ES6](https://www.w3schools.com/js/js_es6.asp) is
* Officially known as ECMAScript 2015, represents the 6th edition of the ECMAScript standard and brought significant advancements to the JavaScript language. This version introduced numerous new features, syntax improvements, and enhancements aimed at making JavaScript more powerful and easier to use for developers.

2. [New features introduced in ES6](https://www.w3schools.com/js/js_es6.asp)
3. The difference between a constant and a variable
- `var`: Variables declared with var are hoisted to the top of their scope and are initialized with undefined. They are function-scoped.
- `let` & `const`: Are also hoisted but are not initialized. They exist in a "temporal dead zone" from the start of the block until the declaration is encountered, meaning accessing them before the declaration results in a ReferenceError. They are block-scoped. This means they are confined to the block in which they are declared preventing the variables from being overwritten outside the block they are declared in.
```
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```
4. Block-scoped variables
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and function [parameters default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to them
5. [Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and spread function parameters
- The _spread syntax_ `...` in JavaScript allows iterable elements (like arrays, objects, or strings) to be expanded or unpacked into individual elements or properties.
i. Combining Arrays
- Can merge arrays seamlessly, providing a more readable and concise alternative to methods like `concat()`.
```
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

```
ii. Copying Arrays
- Useful in creating a new array with the same elements as an existing one without modifying the original.
```
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copiedArray);  // [1, 2, 3, 4]

```
iii. Adding elements
- Can insert additional elements into an array at any position by combining spread syntax with array literals.
```
let numbers = [1, 2, 3];
let extendedArray = [0, ...numbers, 4, 5];
console.log(extendedArray); // [0, 1, 2, 3, 4, 5]
```
iv. Expanding Objects
- Spread syntax can merge and overide objects properties.
```
let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
copiedObject.b = 3;
console.log(originalObject); // { a: 1, b: 2 }
console.log(copiedObject);  // { a: 1, b: 3 }
```
v. Flattening Arrays
- Can be used to flatten nested arrays
```
let nestedArray = [1, [2, 3], [4, 5]];
let flatArray = [].concat(...nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5]
```
6. String templating in ES6
7. Object creation and their properties in ES6
8. Iterators and for-of loops
