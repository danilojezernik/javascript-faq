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

<h2 id="4-what-is-this">4. What is this [[[ ]]]?</h2>

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

Callback hell occurs when you have multiple nested callback functions, making the code hard to read and maintain.
Example:

```javascript
asyncOperation1(() => {
    asyncOperation2(() => {
        asyncOperation3(() => {
            // ...more nested callbacks
        });
    });
});
```

## 11. Explain closures!

Closures are a powerful feature in JavaScript that allow a function to remember and access its lexical scope, even when
the function is executing outside that scope. In simpler terms, closures enable functions to "remember" the environment
in which they were created. This is useful for data encapsulation, creating function factories, and many other
applications.

**How Closures Work**

When a function is created, it captures the variables from its surrounding scope. Even after the outer function has
finished executing, the inner function still has access to these variables. This captured environment is known as the
closure.

### Example of Closures

#### Basic example

```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // The inner function has access to the outer function's variables
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Outputs: 'I am outside!'
```

In this example:

- `outerFunction` creates a variable `outerVariable`.
- `innerFunction` is defined inside `outerFunction` and accesses `outerVariable`.
- `outerFunction` returns `innerFunction`, which is then assigned to `closureFunction`.
- Even though `outerFunction` has finished executing, `closureFunction` still has access to `outerVariable`.

#### Practical Example: Counter

Closures can be used to create a private state, which can be particularly useful for functions like counters.

```javascript
function createCounter() {
    let count = 0; // This variable is private to the returned function

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3
```

In this example:

- `createCounter` initializes a private variable `count`.
- The returned function (a closure) increments `count` and returns the new value.
- Each call to `counter` updates and remembers the `count` variable.

#### Example: Function Factories

Closures can be used to create function factories, which are functions that produce other functions with a specific
behavior.

```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15
```

In this example:

- `createMultiplier` takes a `multiplier` argument and returns a new function.
- The returned function uses the `multiplier` argument from its lexical scope to multiply any given `number`.
- `double` and `triple` are functions created with specific multipliers.

### Key Points about Closures

1. **Persistence of Lexical Scope**: The inner function retains access to variables from the outer function’s scope even
   after the outer function has executed.
2. **Data Encapsulation**: Closures help in creating private variables that cannot be accessed from outside the
   function.
3. **Memory Efficiency**: Be cautious with closures as they can lead to memory leaks if not handled properly, especially
   when keeping references to large objects.
4. **Practical Applications**: Closures are widely used in event handlers, callbacks, and asynchronous programming to
   maintain state and create function factories.

Closures are a fundamental concept in JavaScript that can be used to create powerful and flexible code. Understanding
how closures work and how to use them effectively can help you write cleaner, more maintainable code.

<h2 id="what-is-difference">12. What is the difference between `==` and `===` in JavaScript?</h2>

- `==` **(loose equality)**: Compares values for equality after converting both to a common type.
- `===` **(strict equality)**: Compares values and types for equality without type conversion.

## 13. How to access DOM elements using js?

You can use methods like `getElementById`, `getElementsByClassName`, `querySelector`, and `querySelectorAll` to access
DOM elements. Example:

```javascript
let element = document.getElementById('myElement');
```

## 14. What are higher order functions?

Higher order functions are a powerful and expressive feature of JavaScript that allow for greater flexibility and
reusability in your code. They either take other functions as arguments, return a function as a result, or do both. This
capability allows for more abstract and dynamic ways to work with functions.

### Key Characteristics:

- Taking Functions as Arguments: A higher order function can accept one or more functions as parameters, allowing you to
  pass behavior into functions.
- Returning Functions: A higher order function can return a function, enabling the creation of function generators and
  closures.
- Abstracting Operations: Higher order functions can be used to abstract common patterns of iteration, event handling,
  or any other reusable logic.

### Examples of Higher Order Functions:

**1. Array Methods (e.g., `map`, `filter`, `reduce`):**

These methods are built-in higher order functions that operate on arrays.

- map: Applies a given function to each element of the array and returns a new array with the results.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

- filter: Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

- reduce: Executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

**2. Function Returning Another Function:**

A higher order function can return another function, which is useful for creating function factories or closures.

```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**3. Functions as Arguments:**

Passing functions as arguments allows you to create more flexible and reusable code.

```javascript
function greet(name, formatter) {
    return `Hello, ${formatter(name)}!`;
}

function toUpperCase(name) {
    return name.toUpperCase();
}

console.log(greet('Alice', toUpperCase)); // Hello, ALICE!
```

**4. Event Handling:**

Higher order functions are commonly used in event handling.

```javascript
function addEventHandler(element, event, handler) {
    element.addEventListener(event, handler);
}

const button = document.querySelector('button');
addEventHandler(button, 'click', () => {
    console.log('Button clicked!');
});
```

Higher order functions are a crucial part of functional programming in JavaScript, providing a way to build more
abstract, concise, and reusable code. They enable powerful techniques for working with functions and data structures,
leading to more expressive and maintainable codebases. By leveraging higher order functions, developers can create
flexible and dynamic applications that are easier to extend and refactor.

## 15. Explain destructuring in JavaScript!

Destructuring is a convenient syntax introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or
properties from objects into distinct variables. This feature helps make your code more concise and readable by reducing
the need to access elements or properties individually.

### Key Points:

- **Array Destructuring**: Allows you to extract elements from an array into variables based on their position.
- **Object Destructuring**: Allows you to extract properties from an object into variables based on their keys.
- **Default Values**: You can assign default values in case the unpacked value is undefined.
- **Nested Destructuring**: You can destructure nested arrays and objects.
- **Renaming Variables**: You can rename variables while destructuring objects.

### Examples:

**1. Array Destructuring:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Basic array destructuring
const [first, second] = numbers;
console.log(first); // 1
console.log(second); // 2

// Skipping elements
const [one, , three] = numbers;
console.log(one); // 1
console.log(three); // 3

// Using rest parameter to collect remaining elements
const [firstNum, ...rest] = numbers;
console.log(firstNum); // 1
console.log(rest); // [2, 3, 4, 5]
```

**2. Object Destructuring:**

```javascript
const person = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};

// Basic object destructuring
const {name, age} = person;
console.log(name); // Alice
console.log(age); // 25

// Nested object destructuring
const {address: {city, zip}} = person;
console.log(city); // Wonderland
console.log(zip); // 12345

// Renaming variables
const {name: fullName, age: years} = person;
console.log(fullName); // Alice
console.log(years); // 25

// Using default values
const {profession = 'Unknown'} = person;
console.log(profession); // Unknown
```

**3. Function Parameters Destructuring:**

Destructuring can be used directly in function parameters for cleaner and more readable code, especially when dealing
with objects.

```javascript
// Function with destructured parameters
function greet({name, age}) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const user = {
    name: 'Bob',
    age: 30
};

greet(user); // Hello, my name is Bob and I am 30 years old.
```

**4. Nested Destructuring:**

Destructuring can be used with deeply nested arrays and objects.

```javascript
const complexArray = [1, [2, 3], [4, [5, 6]]];
const [a, [b, c], [d, [e, f]]] = complexArray;
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

const complexObject = {
    person: {
        name: 'Charlie',
        details: {
            age: 35,
            address: {
                city: 'Dreamland',
                zip: '98765'
            }
        }
    }
};

const {person: {name, details: {age, address: {city, zip}}}} = complexObject;
console.log(name, age, city, zip); // Charlie 35 Dreamland 98765
```

Destructuring is a powerful feature in JavaScript that enhances the readability and maintainability of your code. It
simplifies the process of extracting values from arrays and objects, making it easier to work with complex data
structures. By using destructuring, you can write more concise and expressive code, reducing the need for repetitive
access patterns.

## 16. What are spread and rest operators?

The spread (...) and rest (...) operators are powerful features introduced in ECMAScript 6 (ES6) that provide a succinct
way to handle arrays and objects. Both operators use the same syntax but serve different purposes based on the context
in which they are used.

### Spread Operator (`...`)

The spread operator allows you to expand an iterable (like an array or object) into individual elements. It is useful
for copying arrays or objects, merging arrays or objects, and passing array elements as function arguments.

### Examples:

**1. Expanding an Array into Elements:**

```javascript
let arr = [1, 2, 3];
console.log(...arr); // Output: 1 2 3
```

**2. Copying an Array:**

```javascript
let original = [1, 2, 3];
let copy = [...original];
console.log(copy); // Output: [1, 2, 3]
```

**3. Merging Arrays:**

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]
```

**4. Combining Objects:**

```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combined = {...obj1, ...obj2};
console.log(combined); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

**5. Passing Array Elements as Arguments:**

```javascript
function add(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6
```

### Rest Operator (`...`)

The rest operator allows you to collect multiple elements and condense them into a single array or object. It is useful
for handling an arbitrary number of function arguments and extracting a subset of elements from arrays or objects.

### Examples:

**1. Collecting Function Arguments into an Array:**

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

**2. Destructuring with Rest Operator in Arrays:>**

```javascript
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

**3. Destructuring with Rest Operator in Objects:**

```javascript
let {a, b, ...remaining} = {a: 1, b: 2, c: 3, d: 4};
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(remaining); // Output: { c: 3, d: 4 }
```

The spread and rest operators in JavaScript offer a flexible and concise way to work with arrays and objects. The spread operator expands elements, making it useful for copying, merging, and passing elements, while the rest operator collects elements into arrays or objects, making it ideal for functions that handle variable numbers of arguments and for destructuring. Understanding these operators can significantly improve the readability and maintainability of your code.

## 17. What is function currying?

Function currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. Example:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  }
}

let add5 = add(5);
console.log(add5(3)); // Output: 8
```

<h2 id="let-war-const">18. Difference between `let`, `var` and `const`?</h2>

- `let`: is block-scoped, does not get hoisted to the top of the block, cannot be re-declared in the same scope, and does not create a global object property when declared globally.

```javascript
function letExample() {
    // console.log(letVariable); // Uncommenting this line will throw a ReferenceError
    let letVariable = 'I am a let variable';
    console.log(letVariable); // Outputs: 'I am a let variable'
    
    if (true) {
        let letVariable = 'I am a new let variable';
        console.log(letVariable); // Outputs: 'I am a new let variable' (different variable within this block)
    }
    
    console.log(letVariable); // Outputs: 'I am a let variable' (original variable outside the block)
}

letExample();
```

- `var`: is function-scoped, gets hoisted to the top of its function, can be re-declared in the same scope, and creates a global object property when declared globally.

```javascript
function varExample() {
    console.log(varVariable); // Outputs: undefined (due to hoisting)
    var varVariable = 'I am a var variable';
    console.log(varVariable); // Outputs: 'I am a var variable'
    
    if (true) {
        var varVariable = 'I am still a var variable';
        console.log(varVariable); // Outputs: 'I am still a var variable'
    }
    
    console.log(varVariable); // Outputs: 'I am still a var variable' (same variable in the whole function scope)
}

varExample();
```

- `const`: is block-scoped, not hoisted to the top of the block, cannot be re-declared in the same scope, must be assigned a value at declaration, cannot be reassigned, but the contents of objects or arrays can be mutated.

```javascript
function constExample() {
    // console.log(constVariable); // Uncommenting this line will throw a ReferenceError
    const constVariable = 'I am a const variable';
    console.log(constVariable); // Outputs: 'I am a const variable'
    
    if (true) {
        const constVariable = 'I am a new const variable';
        console.log(constVariable); // Outputs: 'I am a new const variable' (different variable within this block)
    }
    
    console.log(constVariable); // Outputs: 'I am a const variable' (original variable outside the block)

    // constVariable = 'New value'; // Uncommenting this line will throw a TypeError

    const constObject = { key: 'value' };
    constObject.key = 'new value'; // Allowed
    console.log(constObject.key); // Outputs: 'new value'
}

constExample();
```

## 19. How do you add an event listener to an element?
## 20. How can you prevent the default behavior of an event in JavaScript?
## 21. What are the different ways to declare a function in JavaScript?
## 22. What is the difference between function declarations and function expressions?
## 23. How do you create an array in JavaScript?
## 24. What are the different ways to copy an object in JavaScript?
## Explain the concept of asynchronous programming in JavaScript.
## What are async and await, and how do they work?
## What is the event loop in JavaScript?
## What is npm, and why is it useful?
## What is the purpose of a package.json file?
## Explain how you would debug a JavaScript application.
## How do you add an element to the beginning/end of an array?
## How do you iterate over an array?