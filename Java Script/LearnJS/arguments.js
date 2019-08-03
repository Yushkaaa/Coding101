//вывод всех аргументов

 function sayHi(){
     for ( var i = 0; i < arguments.length){
         console.log("Hello "+ arguments[i])
     }
 }
 sayHi("Jack","Sam")

 //rest параметры(остаточные)
 function sumAll(...args){
    let sum = 0;
    for(let arg of args) {
        sum += arg
    }
    return sum
}
console.log(sumAll(1,3,4,5,6,10))//29 
console.log(sumAll(1,3))//4


//вывод всех параметров
function wordsGame(preposition, noun, ...other){
    console.log(preposition + ' ' + noun + ' ' + other);
    console.log("А вот что в переменной other : " + other);
    console.log("А это первый элемент other - " + other[0])
    console.log('---------------')
}

wordsGame("В", "сумке","лежит", "красный", "кошелек")
wordsGame("На", "столе","лежит", "тетрадь")