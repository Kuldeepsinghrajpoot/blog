---
title: js-basic
description: It starts from the basics of JavaScript.
content: basic js
date: '2024-09-06'
author: Kuldeep
img: /pexels-photo-4164418.webp
---

## Introduction to JavaScript

JavaScript is a versatile and widely-used programming language primarily known for its role in web development. It enables interactive features on web pages and can be used on both the client and server sides.

## Variables and Data Types

Variables are containers for storing data values. JavaScript has several data types, including:

- **Number**: Represents numeric values.
- **String**: Represents text.
- **Boolean**: Represents true or false.
- **Object**: Represents a collection of properties.
- **Array**: Represents a list-like collection of values.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Null**: Represents a deliberate non-value.

### Declaring Variables

```javascript
let name = "John";
const age = 30;
```

### Functions

Functions are blocks of code designed to perform a particular task. They can be declared in different ways:Function Declaration: Defines a function with a name.Function Expression: Defines a function and assigns it to a variable.Arrow Function: A concise way to write functions.

```javascript showLineNumbers // Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Calling functions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 10));     // Output: 15
console.log(multiply(2, 3)); // Output: 6
