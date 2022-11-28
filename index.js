// task 1
// const numbers = [2, 3, 4, 5];

// decision 1
// let multiplication = 1;
// for (let i = 0; i < numbers.length; i++) {
//     multiplication *= numbers[i]
// };
// console.log(multiplication);

// decision 2
// let multiplication = 1;
// let i = 0;
// while (i < numbers.length) {
//     multiplication *= numbers[i];
//     i++;
// };
// console.log(multiplication);

// task 2
// for (let i = 0; i <= 15; i++) {
//     console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// };

// task 3
// const randArray = function (k) {
//     const randomNumbers = [];
//     for (let i = 0; i < k; i++) {
//         randomNumbers.push(Math.floor(Math.random() * 500))
//     }
//     console.log(randomNumbers);
// }
// randArray(5);

// task 4
// const raiseToDegree = function (a, b) {
//     if (a % 1 === 0 && b % 1 === 0) {
//         console.log(a ** b);
//     } else {
//         console.log('Incorrect data');
//     }
// };
// raiseToDegree(+prompt('Enter number. The number must be an integer.', 0), +prompt('Enter degree. The number must be an integer.', 0));

// task 5
// decision 1
// const findMin = function () {
// console.log(Math.min(...arguments));
// }

// decision 2
// const findMin = function () {
//     let minNumber = arguments[0];
//     for (const number of arguments) {
//         if (number < minNumber) {
//             minNumber = number;
//         }
//     }
//     console.log(minNumber);
// };
// findMin(12, 14, 4, -4, 0.2);

// task 6
// decision 1
// const findUnique = function (arr) {
//     console.log(arr.length === [...new Set(arr)].length);
// };

// decision 2
// const findUnique = function (arr) {
//     const newArr = [];
//     for (const element of arr) {
//         if (!newArr.includes(element)) {
//             newArr.push(element);
//         }
//     }
//     console.log(arr.length === newArr.length);
// };
// findUnique([1, 2, 3, 5, 3]);
// findUnique([1, 2, 3, 5, 11]);


// task 7
// decision 1
// const lastElem = function (arr, count) {
//     count === undefined ? count = 1 :
//         count > arr.length ? count = arr.length : count;
//     const newArr = [];
//     for (let i = arr.length - 1; i > arr.length - 1 - count; i--) {
//         newArr.unshift(arr[i]);
//     }
//     console.log(newArr);
// };
// lastElem([3, 4, 10, -5]);
// lastElem([3, 4, 10, -5], 2);
// lastElem([3, 4, 10, -5], 8);

// task 8
// const firstSymbolToUpCase = function (str) {    
//     const arr = [];
//     for (let word of str.split(' ')) { 
//         arr.push(`${word[0].toUpperCase()}${word.slice(1)}`)
//     }
//     console.log(arr.join(' '));
// }
// firstSymbolToUpCase('i love java script');