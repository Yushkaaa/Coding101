//for in obj
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


////
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