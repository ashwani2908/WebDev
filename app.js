// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

// console.log(document.images);



// var headerTitle =document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);

// header.style.borderBottom ='solid 3px #000'

// //headerTitle.textContent = 'Hello';
// //headerTitle.innerText = 'goodbye';

// var items = document.getElementsByClassName('title');
// //console.log(items);
// items[0].style.color = "green";
// items[0].style.fontWeight = '900';

// document.getElementsByClassName()


// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[2].style.backgroundColor = 'green';

// for(let i=0 ; i< items.length ; i++){
//     items[i].style.fontWeight = 'bold';
// }

//                              getElementByTagName()


// var items= document.getElementsByClassName('list-group1');
// items[0].style.backgroundColor = 'blue' ;

// var lis = document.getElementsByTagName('li') ;

// for(let i=0 ; i<lis.length ; i++){
//     lis[i].style.fontWeight = 'bold';
// };

// for(let i=0 ; i<lis.length ; i++){
//     lis[i].style.color = 'green';
// };


//                  document.querySelector & document.querySelectorAll

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';


// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility ='hidden';


// var fontColor = document.querySelectorAll('.list-group-item');
// fontColor[1].style.color = 'Green';

// var odd = document.querySelectorAll('li:nth-child(odd)')

// for (var i=0 ; i<odd.length ; i++){
//     odd[i].style.backgroundColor = 'green';
// };  


//      TRAVERSING IN DOMS

var headHello = document.querySelector('#main-header');
headHello.firstChild.textContent = 'Hello'



var itemList = document.querySelector('#items');
//parent elements

itemList.parentElement.style.backgroundColor = '#f4f4f4';
val = itemList.parentElement.parentElement;

//children

val = itemList.children;
val = itemList.children[1];
itemList.children[1].style.backgroundColor = 'yellow';

// first Child
itemList.firstChild.textContent = 'Hello';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');




console.log(val);