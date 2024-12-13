//push

let fruits1 = ['apple', 'banana'];
let fruitsLen1 = fruits1.push('orange', 'grape');
console.log(fruits1);  // Output: ['apple', 'banana', 'orange', 'grape']
console.log(fruitsLen1);  // Output: 4

//pop()

let fruits2 = ['apple', 'banana', 'orange'];
let last = fruits2.pop();
console.log(fruits2);  // Output: ['apple', 'banana']
console.log(last);  // Output: 'orange'

//shift()
let fruits3 = ['apple', 'banana', 'orange'];
let first = fruits3.shift();
console.log(fruits3);  // Output: ['banana', 'orange']
console.log(first);  // Output: 'apple'

//unshift()
let fruits4 = ['banana', 'orange'];
let newLength = fruits4.unshift('apple');
console.log(fruits4);  // Output: ['apple', 'banana', 'orange']
console.log(newLength);  // Output: 3

