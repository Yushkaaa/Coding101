document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016'
document.getElementById('fourth').innerHTML = 'Fourth element'

////измение css через .style
document.body.style.backgroundColor = "#201F2E";


////Create and Insert Elements
let newDestination = document.createElement("li");
newDestination.innerHTML = "Oaxaca, Mexico";
document.getElementById("more-destinations").appendChild(newDestination);
//Unlike .innerHTML the .appendChild() method does 
//not replace the content inside of the parent, 
//in this case body. Rather, it appends the element as 
//the last child of that parent.

// метод .querySelector возвращает первый элемент

//метод .hidden скрывает элемент true/false
document.getElementById('sign').hidden = true;


///удаление через removeChild
const parent = document.querySelector("#more-destinations");
const child = document.querySelector("#oaxaca");
parent.removeChild(child);


//Метод возвращает ссылку на элемент, 
//который имеет атрибут id с указанным значением.
document.getElementById() 


///Interactivity with onclick
let element = document.querySelector("button");
function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}
element.onclick = turnButtonRed;

///Traversing the DOM
let first = document.body.firstChild;
first.innerHTML = "First child";
first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";