/*TASK1
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё? */

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?

  // Ответ
  // будет 0,1, так как "let count = 0" созданна внутри функции,
 //и counter и counter2 созданы разными вызовами makeCounter


 /*TASK2 
Будет ли он работать? Что покажет?*/

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // ?
  console.log( counter.up() ); // ?
  console.log( counter.down() ); // ?

  // Ответ
  //Будет работать, тк this это текущий обьект. Выведит 1, 2, 1

  //TASK
  //Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
  //Например:
    // sum(1)(2) = 3
    // sum(5)(-1) = 4

function sum (a){
    return function(b){
       return a+b
    }
}
console.log(sum(10)(15))