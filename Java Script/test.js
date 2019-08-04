// function sumAll(...args) { // args — имя массива
//     let sum = 0;
  
//     for (let arg of args) {
//         sum += arg;
//   }
//   return sum;
// }
  

// console.log(sumAll(1,9))

// function sumAll(...args){
//     let sum = 0;
//     for(let arg of args) {
//         sum += arg
//     }
//     return sum
// }
// console.log(sumAll(1,3,4,5,6,10))
// console.log(sumAll(1))

// function wordsGame(preposition, noun, ...other){
//    console.log(preposition + ' ' + noun + ' ' + other);
//     console.log("А вот что в переменной other : " + other);
//     console.log("А это первый элемент other - " + other[0])
//     console.log("А это второй элемент other - " + arguments[1])
//     console.log('---------------')
// }

// wordsGame("В", "сумке","лежит", "красный", "кошелек")
// wordsGame("На", "столе","лежит", "тетрадь")

// let count = 0;
// function makeCounter() 
// {
    
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1
  
//   console.log( counter2() ); // ?
//   console.log( counter2() ); // ?


//   function Counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   console.log( counter.up() ); // ?
//   console.log( counter.up() ); // ?
//   console.log( counter.down() ); // ?

function sum (a){
    return function(b){
        return a+b
    }
}
console.log(sum(10)(15))