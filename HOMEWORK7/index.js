// ************************ Task 1 ************************
// let openTab = window.open("", "w3schools", "width=300");

// setTimeout(function () {
//     openTab.resizeTo(500,500)
// }, 2000);

// setTimeout(function () {
//     openTab.moveTo(200,200)
// }, 4000);

// setTimeout(() => openTab.close(), 6000);

// ************************ Task 2 ************************
// const paragraph = document.querySelector('#text');

// function changeCSS() {
//     paragraph.style.color = 'orange';
//     paragraph.style.fontSize = '20px';
//     paragraph.style.fontFamily = "Comic Sans MS";
// };

// paragraph.addEventListener('click', changeCSS);

// ************************ Task 3 ************************
// const btn1 = document.querySelector('#button-1');
// const btn2 = document.querySelector('#button-2');
// const btn3 = document.querySelector('#button-3');

// btn1.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'blue'
// });

// btn2.addEventListener('dblclick', function () {
//     document.body.style.backgroundColor = 'orange'
// });

// btn3.addEventListener('mousedown', () => document.body.style.backgroundColor = 'brown');
// btn3.addEventListener('mouseup', () => document.body.style.backgroundColor = 'white');

// document.querySelector('#link').addEventListener('mouseover', () => document.body.style.backgroundColor = 'yellow');
// document.querySelector('#link').addEventListener('mouseout', () => document.body.style.backgroundColor = 'white');

// ************************ Task 4 ************************
// const btn4 = document.querySelector('#button-4');
// const select = document.querySelector('select');

// btn4.addEventListener('click', function () {
//     select.options[select.options.selectedIndex].remove();
// });

// ************************ Task 5 ************************
// const btn5 = document.querySelector('#button-5');
// const div = document.querySelector('div');

// btn5.addEventListener('click', () => div.innerHTML = `<p>I was pressed!</p>`);
// btn5.addEventListener('mouseover', () => div.innerHTML = `<p>Mouse on me!</p>`);
// btn5.addEventListener('mouseout', () => div.innerHTML = `<p>Mouse is not on me!</p>`);

// ************************ Task 6 ************************
// const div = document.querySelector('div');
// window.addEventListener('resize', () => div.innerHTML = `Window height: ${window.innerHeight}; Window width: ${window.innerWidth}`);

// ************************ Task 7 ************************
document.body.innerHTML = `
       <select name="country" id="country">
            <option value="ger">Germany</option>
            <option value="usa">USA</option>
            <option value="ukr">Ukraine</option>
        </select>
        
        <select name="cities" id="cities">
            <option value="berlin">Berlin</option>
            <option value="hamburg">Hamburg</option>
            <option value="munich">Munich</option>
        </select>
        <p>Germany, Berlin</p>`;
const selectCountry = document.querySelector('#country');
const selectCity = document.querySelector('#cities');

selectCountry.addEventListener('change', () => {
    if (selectCountry.options[selectCountry.options.selectedIndex].value === 'ger') {
        selectCity.innerHTML = `
            <option value="berlin">Berlin</option>
            <option value="hamburg">Hamburg</option>
            <option value="munich">Munich</option>`
    } else if (selectCountry.options[selectCountry.options.selectedIndex].value === 'usa') {
        selectCity.innerHTML = `
            <option value="washington">Washington</option>
            <option value="losAngeles">Los Angeles</option>
            <option value="chicago">Chicago</option>`
    } else if (selectCountry.options[selectCountry.options.selectedIndex].value === 'ukr') {
        selectCity.innerHTML = `
            <option value="kyiv">Kyiv</option>
            <option value="kharkiv ">Kharkiv </option>
            <option value="odesa">Odesa</option>`
    }
    const selectedCountry = selectCountry.options[selectCountry.options.selectedIndex].innerHTML;
    const selectedCity = selectCity.options[selectCity.options.selectedIndex].innerHTML;
    document.querySelector('p').innerHTML = `${selectedCountry}, ${selectedCity}`;
});

selectCity.addEventListener('change', function () {
    const selectedCountry = selectCountry.options[selectCountry.options.selectedIndex].innerHTML;
    const selectedCity = selectCity.options[selectCity.options.selectedIndex].innerHTML;
    document.querySelector('p').innerHTML = `${selectedCountry}, ${selectedCity}`;
});