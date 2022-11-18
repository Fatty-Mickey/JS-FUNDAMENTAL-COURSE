// task 2
// console.log("Bilyk");


// task 3
// const firstName = "Maksym";
// const lastName = "Bilyk";
// console.log(`My name is ${firstName} ${lastName}`);
// let x = 1;
// let y = 100;
// x = y;
// console.log(x);
// console.log(y);

// task 4
// const info = {
//     name: "Maksym",
//     age: 35,
//     married: true,
//     work: undefined,
//     profit: null,
// }
// console.log(info);

// task 5
// const isAdult = confirm("Are you an adult?");
// console.log(isAdult);

// task 6
// let firstName;
// let lastName;
// let group;
// let yearOfBirth;
// firstName = "Maksym";
// lastName = "Bilyk";
// group = "Lv-730";
// yearOfBirth = 1986;

// let married;
// married = true;
// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(group));
// console.log(typeof(yearOfBirth));
// console.log(typeof (married));

// console.log(yearOfBirth);
// console.log(married);
// console.log(firstName);

// let bigU;
// let bigN = null;
// console.log(typeof(bigU));
// console.log(typeof(bigN));

// task 7
// const userLogin = prompt("Enter your login")
// const userEmail = prompt("Enter your email")
// const userPassword = prompt("Enter your password")
// console.log(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}. You should not enter your password in pop-up windows.`);

// task 8

const startAI = function () {
    let result = 0;
    const greetings = confirm("Hello! my name is m_001! But my creator calls me Brake. I dream of becoming an AI. Do you want to test me?");
    if (greetings === true) {

        const questionOne = function () {
            const question = +prompt("How many seconds are in 1 hour?");
            if (question === question + 0) {
                if (question === 3600) {
                    const message = alert("You're right. It was easy.");
                    result += 1;
                } else if (question > 3600) {
                    const message = alert("You're wrong. But you have a lot of free time.");
                } else if (question < 3600) {
                    const message = alert("You're wrong. But for you, time passes unnoticed.");
                }
            } else {
                const message = confirm("It's not a number. Do you want to try again?");
                if (message === true) {
                    questionOne();
                }
            }
        }
        questionOne();

        const questionTwo = function () {
            const question = +prompt("How many seconds are in 1 day?");
            if (question === question + 0) {
                if (question === 86400) {
                    const message = alert("You're right. Congratulations!");
                    result += 1;
                } else {
                    const message = alert("You're wrong. It was a difficult question.");
                }
            } else {
                const message = confirm("It's not a number. Do you want to try again?");
                if (message === true) {
                    questionTwo();
                }
            }
        }
        questionTwo();

        const questionThree = function () {
            const question = +prompt("How many seconds are in 1 month (31 days)?");
            if (question === question + 0) {
                if (question === 2678400) {
                    const message = alert("You're right. I'm sure you didn't count in a column.");
                    result += 1;
                } else {
                    const message = alert("You're wrong. You should have used a calculator.");
                }
            } else {
                const message = confirm("It's not a number. Do you want to try again?");
                if (message === true) {
                    questionThree();
                }
            }
        }
        questionThree();

        const resultAlert = alert(`You answered ${result} questions correctly.`);     
    }
}
setTimeout(startAI, 1000);



