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
так и без, если они удовлетворяют ограничениям для имён переменных.*/
var menuSetup = {
    width: 300,
    'height': 200,
    "мама мыла раму": true
  };
  

//В качестве значения можно тут же указать и другой объект:
var user = {
    name: "Таня",
    age: 25,
    size: {
      top: 90,
      middle: 60,
      bottom: 90
    }
  }
  
  alert(user.name) // "Таня"
  
  alert(user.size.top) // 90


  ////

  {name: "Вася", age: 25}
  {name: "Петя", age: 22}
  {name: "Маша", age: 19}
  ...

  
  <структура: string name, number age>
    Вася 25
    Петя 22
    Маша 19