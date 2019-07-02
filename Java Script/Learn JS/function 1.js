function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
/*Перепишите функцию, чтобы она 
делала то же самое,но без if, в 
одну строку.
Используя оператор '?'
Используя оператор || */

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

//синтаксис "?"
//условие ? значение1 : значение2