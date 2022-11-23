// task 1
// let x = 1;
// let y = 2;

// let res1 = x.toString() + y.toString();
// res1 = String(x) + String(y);
// res1 = '' + x + y;
// res1 = `${x}${y}`;
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);
// res2 = !!x + String(y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean(x + y);
// console.log(res3);
// console.log(typeof res3);

// let res4 = x + y + NaN;
// res4 = (x - x + y - y) / (x - x + y - y);
// res4 = (x + y) * "str";
// console.log(res4);
// console.log(typeof res4);

// task 2
// const number = +prompt("Enter the number", 0);
// if (number % 2 === 0 && number > 0) {
//     console.log(`The number ${number} is paired and positive`);
// }
// if (number % 7 === 0) {
//     console.log(`The number ${number} is a multiple of the number 7`);
// }

// task 3
// const array = [];
// array[0] = 1;
// array[1] = 'str';
// array[2] = true;
// array[3] = null;
// array.push(1, 'str', true, null)
// console.log(array.length);
// array.push(prompt("Enter the meaning"));
// console.log(array[4]);
// array.shift(0);
// console.log(array);

// task 4
// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.join("*"));
// console.log(`${cities[0]}*${cities[1]}*${cities[2]}`);

// let str = '';
// for (let i = 0; i < cities.length; i++) {
//     str += cities[i];
//     if (i < cities.length - 1) {
//         str += '*'
//     }
// }
// console.log(str);

// task 5
// const isAdult = prompt("Are you an adult? How old are you");
// console.log(isAdult >=18 ? 'You are adult' : 'You are not adult');

// task 6
// const firstSide = +prompt("Enter the length of the first side of the triangle", 0);
// const secondSide = +prompt("Enter the length of the second side of the triangle", 0);
// const thirdSide = +prompt("Enter the length of the third side of the triangle", 0);

// if (!isNaN(firstSide) && !isNaN(secondSide) && !isNaN(thirdSide)) {
//     const semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
//     const area = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide)).toFixed(3);
//     console.log(`The area of ​​the triangle is ${area}`);

//     const triangleArray = [firstSide, secondSide, thirdSide];
//     const greatestSide = Math.max(...triangleArray);
//     const otherSide = [];
//     for (let i = 0; i < triangleArray.length; i++) {
//         if (triangleArray[i] !== greatestSide) {
//             otherSide.push(triangleArray[i])
//         }
//     }

//     if (greatestSide ** 2 === otherSide[0] ** 2 + otherSide[1] ** 2) {
//         console.log('The triangle is a right triangle');
//     } else if (firstSide === secondSide && secondSide === thirdSide) {
//         console.log('Triangle is an equilateral triangle');
//     }
// } else {
//     console.log('Incorrect data');
// }

// task 7
// const now = new Date().toLocaleTimeString();
// const hours = now.split(':')[0];

// if (hours >= 23 && hours < 5) {
//     console.log('Доброї ночі');
// } else if (hours >= 5 && hours < 11) {
//     console.log('Доброго ранку');
// } else if (hours >= 11 && hours < 17) {
//     console.log('Доброго дня');
// } else {
//     console.log('Доброго вечора');
// }

// switch (true) {
//     case (hours >= 23 && hours < 5): console.log('Доброї ночі');
//         break;
//     case (hours >= 5 && hours < 11): console.log('Доброго ранку');
//         break;
//     case (hours >= 11 && hours < 17): console.log('Доброго дня');
//         break;
//     default: console.log('Доброго вечора');
//         break;
// }


