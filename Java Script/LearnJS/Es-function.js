//https://learn.javascript.ru/es-function

//Параметры по умолчанию могут быть не только значениями, но и выражениями.

function sayHi(who = getCurrentUser().toUpperCase()) {
    console.log('Hi, ' + who);
  }
  
  function getCurrentUser() {
    return 'Ekaterina';
  }
  
  sayHi(); //Hi, EKATERINA

//Можно использовать SPRED вместо аргументов
//оператор spred должен быть в конце

function whoAreU(firstname, lastname, ...other){
    console.log("I am " + firstname + " " + lastname + " " + other )
}
whoAreU("Yush", "Ekaterina", "Vadimovna", "russian", "girl")

//еще одина функция с spred
let numbers = [ 1, 2, 4,6 , 7,15]
let max = Math.max(...numbers)
let maxx = Math.max( 1, 2, 4,6 , 7,15)
console.log("Вывод через spred : " +max)
console.log(maxx)
//первый – короче и красивее.

/* Деструктуризация(особый синтаксис присваивания) */
// если функция поучила обьект то она может разбить его на параметры

let user = {
    name : "Ekaterina",
    lastname : "Yush",
    age : 24
}
function showUser({name, lastname, age}){
    console.log(name + " " + lastname + " " + " " + age)
}

showUser(user) //Ekaterina Yush  24

/* У функции есть свойство NAME  в которой выводится ее собственое имя
*/
 console.log(showUser.name)
 //PS не совсем поняла для чего, тк при объявлении итак используется имя функции
 //уточнить у Миши

 //можно использовать для анонимных функций 
 let k = function() {};//// свойство k.name = "k"
