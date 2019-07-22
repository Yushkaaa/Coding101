 //обычная функция
 function sum (a, b) {
    console.log(a + b)
}
sum(3,5)

//стрелочная функция
let myFunc = () => {
    console.log('work');
    console.log(a+b)
}
myFunc(3,6);

// есть параметры
let c = (d,g) => {
    //
    //
    return d*5*g
}
console.log(c(3,9));


//нет параметров
//в любом случае нужны пустые скобки
let c = () => {
   //
   //
   return true
}
//один параметр, можно не ставить скобки
let c = d => {
   //
   //
   return d
}
//несколько параметров, действие одно, которое надо возратить,
//тогда return не нужен 
let c = (d,g) => d*g 