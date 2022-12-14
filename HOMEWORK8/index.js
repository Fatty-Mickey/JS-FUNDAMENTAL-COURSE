// ************************ Task 1 ************************
const upperCase = str => /^[A-Z]/.test(str) ? "String's starts with uppercase character" : "String's not starts with uppercase character";
console.log(upperCase('RegExp'));
console.log(upperCase('regExp'));

// ************************ Task 2 ************************
// const checkEmail = str => /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(str);
// console.log(checkEmail("Qmail2@gmail.com"));

// ************************ Task 3 ************************
const re3 = /d(b+)(d)/gi;
console.log(re3.exec('cdbBdbsbz'));

// ************************ Task 4 ************************
function rev(str) {
    const re4 = /\s/;
    return str.split(re4).reverse().join(', ')
}
console.log(rev('Java Script'));

// ************************ Task 5 ************************
const cardVal = str5 => /^(\d{4}\-){3}(\d{4})$/.test(str5);
console.log(cardVal('9999-9999-9999-9999'));

// ************************ Task 6 ************************
const checkEmail2 = str => /(^[a-z0-9]+)([a-z0-9]*\_?\-{0,1})/ig.test(str) ? "Email is correct!" : "Email is not correct!";
console.log(checkEmail2('my_mail@gmail.com'));
console.log(checkEmail2('#my_mail@gmail.com'));
console.log(checkEmail2('my_ma--il@gmail.com'));

// ************************ Task 7 ************************
const checkLogin = str => {
    console.log(/^[a-z]+[0-9a-z\.]{1,12}$/gi.test(str));
    console.log(str.match(/\d(\.\d)?/g));

};
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');



