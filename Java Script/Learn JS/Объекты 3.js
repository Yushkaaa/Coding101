/////////for in obj
for (key in obj) {
  /* ... делать что-то с obj[key] ... */
}
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

var counter = 0;

for (var key in menu) {
  counter++;
}

alert( "Всего свойств: " + counter );


//////////
var menu = {
    width: 300,
    height: 200,
    title: "Menu"
  };
  
  for (var key in menu) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
  
    alert( "Ключ: " + key + " значение: " + menu[key] );
  }


  /////////клонирует 
  var user = {
    name: "Вася",
    age: 30
  };
  
  var clone = {}; // новый пустой объект
  
  // скопируем в него все свойства user
  for (var key in user) {
    clone[key] = user[key];
  }
  
  // теперь clone - полностью независимая копия
  clone.name = "Петя"; // поменяли данные в clone
  
  alert( user.name ); // по-прежнему "Вася"