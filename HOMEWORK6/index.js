// ************************ Task 1 ************************
// const element1 = document.getElementById('test');
// const element2 = document.getElementsByTagName('div')[0];
// console.log(element1);
// console.log(element2);
// element1.innerHTML = 'Last';

// ************************ Task 2 ************************
// const image = document.querySelector('.image');
// image.innerHTML = '<img class="image" src="cat.jpg">';
// console.log(image);
// alert(image);

// ************************ Task 3 ************************
// const paragraphs = document.querySelectorAll('.paragraph');
// for (let i = 0; i < paragraphs.length; i++) {
//     let log = `Selector text ${i}: ${paragraphs[i].innerHTML}`;
//     console.log(log);
// };

// ************************ Task 4 ************************
// const list = document.getElementById('list');
// const one = list.firstElementChild;
// const five = list.lastElementChild;
// const two = one.nextElementSibling;
// const four = five.previousElementSibling;
// const three = four.previousElementSibling;
// alert(`${one.innerHTML}, ${five.innerHTML}, ${two.innerHTML}, ${four.innerHTML}, ${three.innerHTML}`);

// const first = document.querySelector('.one');
// const second = document.querySelector('.two');
// const third = document.querySelector('.three');
// const fourth = document.querySelector('.four');
// const fifth = document.querySelector('.five');
// alert(`${first.innerHTML}, ${fifth.innerHTML}, ${second.innerHTML}, ${fourth.innerHTML}, ${third.innerHTML}`);

// ************************ Task 5 ************************
// const header = document.getElementsByTagName('h1')[0];
// header.style.backgroundColor = 'green';

// const div = document.getElementById('myDiv');

// const firstParagraph = div.firstElementChild;
// firstParagraph.style.fontWeight = 'bold';

// const secondParagraph = firstParagraph.nextElementSibling;
// secondParagraph.style.color = 'red';

// const thirdParagraph = secondParagraph.nextElementSibling;
// thirdParagraph.style.textDecoration = 'underline';

// const fourthParagraph = thirdParagraph.nextElementSibling;
// fourthParagraph.style.fontStyle = 'italic';

// const list = document.getElementById('myList');
// list.style.display = 'flex'
// const listItems = list.querySelectorAll('li');
// listItems[0].style.listStyleType = 'none';
// listItems[1].style.listStyleType = 'none';
// listItems[2].style.listStyleType = 'none';

// const span = document.querySelector('span');
// span.style.display = 'none';

// ************************ Task 6 ************************
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');

// input1.value = prompt('input1');
// input2.value = prompt('input2');

// [input1.value, input2.value] = [input2.value, input1.value];

// ************************ Task 7 ************************
// document.body.innerHTML = `
// 	<body>
// 		<main class="mainClass check item"> 	
// 		    <div id="myDiv">
//                 <p>First paragraph</p>           
//             </div>
//        </main> 
// 	</body>
// `