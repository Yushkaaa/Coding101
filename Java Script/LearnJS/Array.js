/*ARRAY*/

let animals = ["dog","cat", "rabbit", "pig"];
animals.pop()//POP удаляет последний элемент
console.log(animals)

animals.push("bird")//PUSH Добавляет элемент в конец массива:
console.log(animals)

animals.shift()//SHIFT Удаляет из массива первый элемент
console.log(animals)

animals.unshift("puppi")//UNSHIFT Добавляет элемент в начало массива:
console.log(animals)

//Методы push и unshift могут добавлять сразу по несколько элементов


for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}


console.log(animals.length-1)


//TASK1

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length-2] = ("Классика")
console.log(styles.shift())
styles.unshift("Рэп", "Регги")
console.log(styles)

//TASK2

let rand = Math.floor(Math.random() * styles.length);
console.log(styles[rand])
 

/*ARRAY-METHODS*/
 
let names = 'Masha, Sasha, Dasha, Pasha, Misha, Natasha'
let arr = names.split(", ");//превращвет строку в массив,разбив на разделитель
console.log(arr)

let str = arr.join(';')//превращает массив в строку
console.log(str)

delete arr[1];//удаляет
console.log(arr)

let arrSplic = ["первый","второй", "третий", "следующий элимент будет заменен",  "слово для замены"]
arr.splice(arr.length-1,arr.length-1,"новый элемент")
//удаляет часть массива и добавляет новые элементы на место удаленных.


/*reverse меняет порядок на обратный*/
let rev = [1, 2, 3];
rev.reverse();
console.log(rev); // 3,2,1


/* forEach используется для перебора массива.
callback(item, i, arr)
item – очередной элемент массива.
i – его номер.
arr – массив, который перебирается. */
let animals = ["dog","cat", "rabbit", "pig"]
animals.forEach(function(item, i, animals) {
    console.log( i + ": " + item + " (массив:" + animals + ")" );
  });

/*filter
Создаёт массив, в который войдут те элементы arr, 
для которых вызов callback(item, i, arr) возвратит true*/
let arr = [1, -1, 2, -2, 3];
let positiveArr = arr.filter(function(number) {
  return number > 0;
});

console.log(positiveArr); // 1,2,3

/*map
Для трансформации массива.
Создаёт новый массив, который из результатов 
вызова callback(currentvalue, i, arr) для каждого элемента arr*/
//map сработает столько раз, сколько там элементов

let AnimalsLengths = animals.map(function(animals) {
  return animals.length;
});
// получили массив с длинами
console.log( AnimalsLengths );


/*every/some
«arr.every(callback[, thisArg])» вернет true, если вызов 
callback вернёт true для КАЖДОГО элемента arr.
«arr.some(callback[, thisArg])» вернет true, 
если вызов callback вернёт true для КАКОГО_НИБУДЬ элемента arr.*/
//let arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr.every(isPositive) ); // false, не все положительные
console.log( arr.some(isPositive) ); // true, есть хоть одно положительное

/*reduce/reduceRight
Для последовательной обработки каждого элемента массива 
с сохранением промежуточного результата.
callback(previousValue, currentItem, index, arr):
*previousValue – последний результат вызова функции, он же «промежуточный результат».
*currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
*index – номер текущего элемента.
*arr – обрабатываемый массив.*/
let total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
  });
console.log(total)//6 - сумма всех элементов


//let animals = ["dog","cat", "rabbit", "pig"]

// let totalAnimalsLenght = animals.reduce(function(sum, current) {
//     return sum + current;
//   }, 0);
// console.log(totalAnimalsLenght)


///TASK 1
let phrase = ["Есть", "жизнь", "на", "Марсе"];

let phraseLength = phrase.map(function(phrase){
    return phrase.length
})

console.log(phraseLength); 


/*fill
заполняет все элементы массива от 
начального до конечного индексов одним значением.
arr.fill(value[, start = 0[, end = this.length]])
value- Значение, заполняющее массив.
start- Необязательный параметр. Начальный индекс.
end- Необязательный параметр. Конечный индекс.*/
console.log([1,2,3,4].fill(5))

let arr = [0,1,2,3,4,5,6,7,8,9,10]
arr.fill(77, 1,5)
console.log(arr)



/*Деструктуризация

Особый синтаксис присваивания, при котором можно присвоить 
массив или объект сразу нескольким переменным, разбив его на части.*/
let arr = [name, firstname, age, country]=["Ekaterina", "Yush", 24, "Russia"]

console.log(arr)
console.log(name)


/*Spread

Если мы хотим получить и последующие значения массива, но не уверены в 
их числе – можно добавить ещё один параметр, который получит «всё остальное», 
при помощи оператора "..." («spread», троеточие) */
let arr1 = [name, firstname, ... rest]=["Ekaterina", "Yush", 24, "Russia"]
console.log(rest)
