//MAP
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

const strings = ["hello", "world"];
const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log(uppercaseStrings);  // Output: ["HELLO", "WORLD"]

//Filter
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

const strings2 = ["hello", "world", "abc"];
const longStrings = strings2.filter(str => str.length > 5);
console.log(longStrings);  // Output: ["hello", "world"]

//ForEach
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => console.log(num));
// Output: 1, 2, 3, 4, 5 (Each number is logged)

const strings3 = ["hello", "world"];
const Str = strings3.map(str => str + "!");
console.log(Str);  // Output: ["hello!", "world!"]

//every
const numbers4 = [1, 2, 3, 4, 5];
const num = numbers4.every(num => num > 0);
console.log(num);  // Output: true

const strings4 = ["hello", "world", "abc"];
const LongStri = strings4.every(str => str.length > 5);
console.log(LongStri);  // Output: false


//Some
const numbers5 = [1, 2, 3, 4, 5];
const Even = numbers5.some(num => num % 2 === 0);
console.log(Even);  // Output: true

const strings5 = ["hello", "world", "max"];
const string = strings5.some(str => str.includes('x'));
console.log(string);  // Output: true


//find
const numbers6 = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // Output: 2

const strings6 = ["hello", "world", "max"];
const firststr = strings.find(str => str.includes('x'));
console.log(firststr);  // Output: "max"

//findIndex
const numbers7 = [1, 2, 3, 4, 5];
const indexFirstEven = numbers.findIndex(num => num % 2 === 0);
console.log(indexFirstEven);  // Output: 1

const strings7 = ["hello", "world", "max"];
const indexstr = strings.findIndex(str => str.includes('x'));
console.log(indexstr);  // Output: 2










