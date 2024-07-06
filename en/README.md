1. [What is the use of the window object?](#1-what-is-the-use-of-the-window-object)
2. [What are the different data types present in JavaScript?](#2-what-are-the-different-data-types-present-in-javascript)
3. [What is the difference between undefined value and null value?](#3-what-is-the-difference-between-undefined-value-and-null-value)
4. [What is this [[[ ]]]?](#4-what-is-this-)





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

Arrow functions are a shorthand way to write functions in JavaScript. They are more concise and do not have their own
this context. Example:

```javascript
// Traditional function expression
const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Arrow function
const add = (a, b) => a + b;

// Arrow function with explicit return (using curly braces)
// This arrow function includes the curly braces {}.
// Inside the braces, you must use the return keyword to return a value explicitly
const addExplicit = (a, b) => {
    return a + b;
};

console.log(addExplicit(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5
```

## 8. What is this keyword?

The `this` keyword in JavaScript is a special identifier that refers to the object that is currently executing the code.
Its value depends on the context in which it is used: global, function, method, or constructor. Here's a breakdown of
how this behaves in different contexts with examples:

1. **Global Context**: In the global execution context (outside any function), this refers to the global object, which
   is window in browsers.

```javascript
console.log(this); // In a browser, this will output the Window object
```

2. **Method Context**: When used inside a method, this refers to the object that owns the method.

```javascript
const person = {
    name: 'Alice',
    greet: function () {
        console.log(this); // this refers to the person object
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: person object and "Hello, my name is Alice"
```

3. **Function Context**: Non-strict Mode: In non-strict mode, this inside a function refers to the global object (window
   in browsers).

```javascript
function showGlobalThis() {
    console.log(this); // In a browser, this will output the Window object
}

showGlobalThis();
```

4. **Constructor Context**: In a constructor function, this refers to the newly created instance of the object.

```javascript
function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const bob = new Person('Bob');
bob.greet(); // Output: "Hello, my name is Bob"
```

5. **Arrow Functions**: Arrow functions do not have their own this context. Instead, they inherit this from the
   enclosing scope at the time they are defined.

```javascript
const obj = {
    name: 'Charlie',
    regularFunction: function () {
        console.log(this.name); // Output: Charlie
    },
    arrowFunction: () => {
        console.log(this.name); // Output: undefined (or global name if defined)
    }
};

obj.regularFunction();
obj.arrowFunction();
```

## 9. What are promises? How do you call a promise?

Promises are a foundational part of asynchronous programming in JavaScript. They provide a cleaner, more robust way to
handle operations that may complete at some future time, compared to traditional callback-based approaches. A Promise
represents a value that might be available now, in the future, or never.

Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in
the future, or never. Promises have three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### Key Methods:

- **then()**: Attaches callbacks for the fulfillment and rejection of the Promise.
- **catch()**: Attaches a callback for only the rejection of the Promise.

### Basic Example:

```javascript
const promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., network request)
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation succeeded');
        } else {
            reject('Operation failed');
        }
    }, 2000);
});

promise.then(result => {
    console.log(result); // 'Operation succeeded'
})
    .catch(error => {
        console.error(error); // 'Operation failed'
    });
```

### Real-World Examples:

1. **Fetching Data from an API**:

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.error('Fetching data failed:', error);
    });
```

2. **Reading a File**:

```javascript
const fs = require('fs').promises;

fs.readFile('path/to/file.txt', 'utf8')
    .then(contents => {
        console.log('File contents:', contents);
    })
    .catch(error => {
        console.error('Reading file failed:', error);
    });
```

3. **Sequential Asynchronous Operations**:

Imagine a scenario where you need to perform multiple asynchronous operations in sequence, such as first authenticating
a user and then fetching their profile data:

```javascript
function authenticateUser(credentials) {

    return new Promise((resolve, reject) => {
        // Simulate an asynchronous authentication API call
        setTimeout(() => {
            if (credentials.username === 'user' && credentials.password === 'pass') {
                resolve('Auth token');
            } else {
                reject('Authentication failed');
            }
        }, 1000);
    });
}

function fetchUserProfile(authToken) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous profile fetch API call
        setTimeout(() => {
            if (authToken === 'Auth token') {
                resolve({name: 'John Doe', age: 30});
            } else {
                reject('Invalid auth token');
            }
        }, 1000);
    });
}

const credentials = {username: 'user', password: 'pass'};

authenticateUser(credentials)
    .then(authToken => {
        console.log('Authenticated successfully');
        return fetchUserProfile(authToken);
    })
    .then(profile => {
        console.log('User profile fetched:', profile);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

4. Handling Multiple Promises Concurrently:
   Using Promise.all to wait for multiple asynchronous operations to complete:

```javascript
const promise1 = fetch('https://api.example.com/data1').then(response => response.json());
const promise2 = fetch('https://api.example.com/data2').then(response => response.json());

Promise.all([promise1, promise2])
    .then(results => {
        console.log('Both data fetched:', results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

```

Promises are a powerful feature for managing asynchronous operations in JavaScript, making the code more readable and
easier to maintain. They handle asynchronous events in a way that is much more manageable than traditional
callback-based approaches.

## 10. What is callback hell?