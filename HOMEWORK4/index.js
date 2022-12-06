// ************************ Task 1 ************************

// function calcRectangleArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw 'Incorrect data';
//     }
//     return width * height;
// };
// try {
//     console.log(calcRectangleArea('a', 2));
// } catch (e) {
//     console.log(e);
// }

// ************************ Task 2 ************************
// function checkAge(age = prompt('How old are you?')) {
//     if (age === '') {
//         throw new Error('The field is empty! Please enter your age.');
//     } else if (isNaN(+age)) {
//         throw new Error('Incorrect data.');
//     } else if (+age < 14) {
//         throw new Error('Your age is less than 14 years old. Access denied.');
//     } else {
//         alert('Access is allowed.')
//     }
// };
// try {
//     checkAge()
// } catch (e) {
//     alert(e.message);
//     console.log(e.stack);
// };

// ************************ Task 3 ************************
// const months = ['January', 'February', 'March', 'April ', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// class MonthException {
//     constructor(message) {
//         this.message = message;
//     }    
// }

// function showMonthName(month) {
//     if (isNaN(month) || month <= 12) {
//         return months[month -1]
//     }
//     return new MonthException('Incorrect month number')
// }
// console.log(showMonthName(1));
// console.log(showMonthName(13));




    // ************************ Task 4 ************************
// function showUser(id) {
//     try {
//         if (isNaN(id) || id < 0) {
//             throw (`Error: ID must not be negative: ${id}`);
//         };
//         return { id };
//     } catch (e) {
//         console.log(e);
//     }
// };

// function showUsers(ids) {
//     const idsArray = [];
//     ids.forEach(function (element) {
//         idsArray.push(showUser(element));
//     });
//     return idsArray;
// };
// console.log(showUsers([7, -12, 44, 22]));

// Error: ID must not be negative: -12
// [{ id: 7 }, undefined, { id: 44 }, { id: 22 }]
// при спробі виконнаня строго по умові завдання не можу позбутися цього undefined без зайвого коду

// ************************ Task 4 ************************
// correct version

// function showUser(id) {
//     return { id };
// };

// function showUsers(ids) {
//     const idsArray = [];
//     ids.forEach(function (element) {
//         try {
//             if (isNaN(element) || element < 0) {
//                 throw (`Error: ID must not be negative: ${element}`);
//             }
//             idsArray.push(showUser(element));
//         } catch (e) {
//             console.log(e);
//         }
//     });
//     return idsArray;
// };
// console.log(showUsers([7, -12, 44, 22]));

// при такому варіанті все ок


