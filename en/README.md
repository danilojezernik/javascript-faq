## 1. What is the use of the window object?

The window object is the global object in a web browser. It represents the browser window or frame containing the HTML
document. All global JavaScript objects, functions, and variables automatically become members of the window object. It
is used to control the browser window and access its properties and methods, like alert boxes, timeouts, and intervals.

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/1.html)

## 2. What are the different data types present in JavaScript?

JavaScript has the following data types:

- String: Represents text (e.g., "hello").
- Number: Represents numbers (e.g., 5, 3.14).
- Boolean: Represents true or false.
- Undefined: A variable that has been declared but not assigned a value.
- Null: Represents no value or an empty value.
- Object: Represents complex data structures (e.g., { key: "value" }).
- Symbol: Represents unique identifiers.
- BigInt: Represents large integers.

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/2.html)

## 3. What is the difference between undefined value and null value?

Undefined: A variable that is declared but not assigned a value has the value undefined.
Null: Represents a deliberate non-value or empty value. It is assigned explicitly.

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/3.html)

## 4. What is this [[[ ]]]?

This represents a nested array structure. For example, [[[ ]]] is an array containing an array that contains another
empty array.

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/4.html)

## 5. What are the differences between cookie, local storage, and session storage?

- Cookies: Small pieces of data stored in the browser, sent to the server with every request. They have an expiration
  date.
- Local Storage: Stores data in the browser with no expiration date until explicitly deleted. It is accessible from any
  page on the same domain.
- Session Storage: Similar to local storage but data is cleared when the page session ends (i.e., when the browser is
  closed).

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/5.html)

## 6. What is the difference between setInterval and setTimeout?

- setInterval: Repeats a function at specified intervals (e.g., every second) until stopped.

```javascript
let intervalId = setInterval(() => console.log("Hello"), 1000);
```

- setTimeout: Executes a function once after a specified delay.

```javascript
setTimeout(() => console.log("Hello"), 1000);
```

[Example](https://github.com/danilojezernik/js-interview-30/blob/master/examples/6.html)

## 7. What are arrow functions? How are they different from normal functions?
Arrow functions are a shorthand way to write functions in JavaScript. They are more concise and do not have their own this context. Example:

```javascript
// Traditional function expression
const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Arrow function
const add = (a, b) => a + b;

// Arrow function with explicit return (using curly braces)
// This arrow function includes the curly braces {}. Inside the braces, you must use the return keyword to return a value explicitly
const addExplicit = (a, b) => {
  return a + b;
};

console.log(addExplicit(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5
```
