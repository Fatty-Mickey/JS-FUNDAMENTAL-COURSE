// ************************ Task 1 ************************
// const getPromise = (message, delay) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(message);
//     }, delay);
// });
// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });

// ************************ Task 2 ************************
// const calcArrProduct = (arr) => new Promise((resolve, reject) => {
//     const isArr = () => {
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] !== 'number') {
//                 return false;
//             }
//         }
//         return true;
//     }
//     if (isArr()) {
//         resolve(arr.reduce((a, b) => a * b))
//     } else {
//         reject(" Error! Incorrect array! ")
//     }

// });
// calcArrProduct([3, 4, 5]).then(result => console.log(result));
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

// ************************ Task 3 ************************
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// const showNumbers = (n) => {
//     let i = 0;    
//     let promise = () => new Promise((resolve, reject) => {
//         delay(i, i * 1000).then(result => {
//             console.log(result)
//             i++;
//             if (i <= n) {
//                 promise()
//             }
//         })
//     })
//     promise();
// }
// showNumbers(10);

// ************************ Task 3 ************************
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
const showNumbers = (n) => {
    let i = 0;
    async function promise() {
        await delay(i, i * 1000).then(result => {
            console.log(result)
            i++;
            if (i <= n) {
                promise()
            }
        })
    }
    promise();
}
showNumbers(10);