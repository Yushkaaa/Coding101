//isEmpty(obj), которая возвращает true,
//если в объекте нет свойств и false – если хоть одно свойство есть.

function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
  
  var schedule = {};
  
  alert( isEmpty(schedule) ); // true
  
  schedule["8:30"] = "подъём";
  
  alert( isEmpty(schedule) ); // false

  //код, который выведет сумму всех зарплат.
  let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  
  let sum = 0;
  for (var name in salaries) {
    sum += salaries[name];
  }
  
  alert( sum );
//выведет имя сотрудника, у которого самая большая зарплата
var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );