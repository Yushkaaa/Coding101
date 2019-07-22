 //Следующие два фрагмента кода создают одинаковый объект:
var menuSetup = {
  width: 300,
  height: 200,
  title: "Menu"
};
// то же самое, что:
var menuSetup = {};
menuSetup.width = 300;
menuSetup.height = 200;
menuSetup.title = 'Menu';


/*Названия свойств можно перечислять как в кавычках, 
так и без, если они удовлетворяют ограничениям для имён переменных
В качестве значения можно тут же указать и другой объект*/
var user = {
    name: "Таня",
    "age": 25,
    "girl" : true,
    size: {
      top: 90,
      middle: 60,
      bottom: 90
    }
  }
  alert(user.name) // "Таня" 
  alert(user.size.top) // 90


/*TASK 
Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.*/
var user = {};
user.name = "Ekaterina";
user.surname = "Iushkovskaia";
delete user.name;
///

let person = {
    name: 'Ekaterina',
    lastname : 'Iushkovskaia',
    age: 24,
    country : 'Russia'
};

// for (i in person) {
//     console.log("Ключ: " + i + " Значение: " + person[i])
// }
let key  = person.country
let lname = person['lastname']

console.log(lname);
console.log(person.name); 
console.log(person['age']);
console.log(key)
//console.log(person[age]);// is not defined


/*isEmpty(obj)
возвращает true, если в объекте нет свойств 
и false – если хоть одно свойство есть.*/
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";//заполняем пустое свойство
console.log( isEmpty(schedule) ); // false


/*TASK 
код, который выведет сумму всех зарплат
и имя сотрудника, у которого самая большая зарплата*/
let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
//сумма
let sum = 0;
for (let name in salaries) {
  sum += salaries[name];
}
console.log( sum );

//выведет имя и зп 
var max = 0;
var maxName = "";
for (var name in salaries) {
if (max < salaries[name]) {
  max = salaries[name];
  maxName = name;
}
}
console.log( maxName || "нет сотрудников" );


/*For in obj*/

let menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

let counter = 0;
for (key in menu) {
  counter++;//посчитает
  console.log( "Ключ: " + key + " значение: " + menu[key] );//выведет
}
console.log( "Всего свойств: " + counter );


/*Клонирование*/
let user = {
  name: "Вася",
  age: 30
};

let clone = {}; // новый пустой объект

for (key in user) { //скопируем в него все свойства user
  clone[key] = user[key];
}

