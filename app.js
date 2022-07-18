console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.forms[0]);

console.log(document.images);



var headerTitle =document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);

header.style.borderBottom ='solid 3px #000'

//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodbye';

var items = document.getElementsByClassName('title');
//console.log(items);
items[0].style.color = "green";
items[0].style.fontWeight = '900';
