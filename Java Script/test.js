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

// function sum (a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(sum(10)(15))

// function sayHi(who = getCurrentUser().toUpperCase()) {
//     console.log('Привет, ' + who);
//   }
  
//   function getCurrentUser() {
//     return 'Ekaterina';
//   }
  
//   sayHi(); 

// function whoAreU(firstname, lastname, ...other){
//     console.log("I am " + firstname + " " + lastname + " " + other )
// }
// whoAreU("Yush", "Ekaterina", "Vadimovna", "russian", "girl")

// let numbers = [ 1, 2, 4,6 , 7,15]
// let max = Math.max(...numbers)
// let maxx = Math.max( 1, 2, 4,6 , 7,15)
// console.log(max)
// console.log(maxx)


// let user = {
//     name : "Ekaterina",
//     lastname : "Yush",
//     age : 24
// }
// function showUser({name, lastname, age}){
//     console.log(name + " " + lastname + " " + " " + age)
// }

// showUser(user)
// console.log(showUser.name)



// function printNumbers(from, to){
//     let number = from;
//     setTimeout( function plus(){
//         console.log(number)
//         if (number < to){
//             setTimeout(plus, 1000)
//         }number++;
//     },1000)
// }
// printNumbers(1,5)




// let printNumbers = setInterval(
//     (function plus(from, to) {
//         return () => {
//             console.log(from++);
//             if(from >= to) {
//                 clearInterval(printNumbers);
//             }
//         }
//     })(0, 5), 1000);

    // let printNumbers = setInterval((
    //     function plus(from,to){
    //         let number = from;
    //         console.log(number)
    //         for( ; number<to;){
    //             number++
    //             console.log(number) 
    //         }
    //         // if(number < to) {
    //         //     number++;   
    //         // } else {
    //         // if(number==to){
    //         //     clearInterval(printNumbers);
    //         // }
    // //     }
    // // ), 1000);
    // // printNumbers.plus(1,5)


//     // // раб пример, без повтора
//     function plus(from, to){
//         let number = from;
//          console.log(number);
        
//         for ( ;number<to;){
//             number++
//             console.log(number)
//         }
//     }
//    setInterval(plus, 1000, 1,5)
///
//    function printNumbers(from, to){
//     let number = from;
//     console.log(number);

//     let plus = setInterval(function(){
//         for ( ;number<to;){
//             number++
//             console.log(number)
//         }
//         if(number = to){
//             clearInterval(plus);
//           }

//     },1000)
//    }
//    printNumbers(1,5)
    
    // setInterval(pr,1000)
    // let timerId = setInterval(() => console.log('tick'), 1000);
    // setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000)


    // function printNumbers(from, to){
    //     let number = from;

    //     let num = setInterval(function(){
    //         console.log(number)
    //         if (number=== to){
    //             clearInterval(num)
    //         }
    //         number++;
    //     },500)
    // }
    // printNumbers(1,10)

    // let animals = {
    //     eat : true 
    // };
    
    // cat  = {
    //     sound : "meow"
    // }
    //  cat.__proto__ = animals;
    // //  console.log(cat.eat)
    // //  console.log(cat.sound)

    // //  console.log(cat.hasOwnProperty('jumps'))
    // //  console.log(cat.hasOwnProperty('sound'))
    // for(let key in cat){
    //     console.log(key + " = " + cat[key]);
    // }

    // function myFunc(from,to){
    //     if (from < to){
    //         console.log(from);
    //         setInterval(myFunc, 1000, from+1,to)
    //     }
    // }
    // myFunc(1,10)

    // function sayHi(){
    //     console.log(this.name)
    // }
    // let user1 = { name : "Kate"}
    // let user2 = {name : ""}
   
    // // используем 'call' для передачи различных объектов как 'this'
    // sayHi(user1)
    // sayHi.call(user2)

//     // Здесь мы используем call для вызова say с заданным контекстом и фразой
// function saySmth(phrase){
//     console.log(this.name + ": " + phrase)
// }
// let user = {name : "Kate"}
// // 'user' становится 'this', и "Hello" становится первым аргументом(phrase)
// saySmth.call(user, "Hello")

//////////////////////////////////////
// function doSmth(name){
//     console.log("Hello " + name)
// }
// function Dec(wrapped){
//     return function(){
//         console.log("***Starting****")
//         let result = wrapped.apply(this, arguments);
//         console.log("***Finished***")
//         return result
//     }
// }
// let wrapped = Dec(doSmth)
// doSmth("Kate")

// wrapped("Kate")


// /Вариант 3
// function printNumbers(from, to){
//     let number = from;

//     let num = setInterval(function(){
//         console.log(number)
//         if (number=== to){
//             clearInterval(num)
//         }
//         number++;
//     },500)
// }
// printNumbers(1,10)

////////////////////////////////
// const name = ['Kate','Dasha', 'Mike']

// function mapArray(arr, fn) {
//     const result = [];
//     for(let i = 0; i < arr.lenght; i++){
//         result.push(fn(arr[i]))
//     }
//     return result;
//  } 

//  function nameLenght(el){
//      console.log(el)
//      return el.lenght
//  }

//  function nameToUpperCase(el){
//      return el.toUpperCase();
//  }
//  const res = mapArray(name, nameLenght);
//  console.log(res)
//  const res2 = mapArray(name, nameToUpperCase);
//  console.log(res2)

//  mapArray(name, nameLenght);
 /////////////////////////////////

//   function printNumbers(from,to){
//     let number = from;
//     console.log(number);
//     for ( ;number<to;){
//         number++
//         console.log(number)
//     }
// }

// function Interval(fn) {
//     return setInterval(fn,1000)
// }

// // const num = printNumbers(1,10);

// // console.log(Interval(printNumbers(1,10)));
// Interval(printNumbers(1,10))


////////////////////////////////

// function Rabit(){

// }
// console.log(Rabit.prototype.constructor ===Rabit)

// class User {
//     constructor(name, age, country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
  
    
    
//     sayHi(){
//         console.log("Hello " + this.name)
//     }
//     HowOldAreU(){
//         console.log(this.name + " is " + this.age + " years old!")
//     }
//     liveIn(){
//         console.log(this.name + " live in " + this.country + "!")
//     }
// }
// //иcпользование
// let user = new User("Kate", 24, "China");
// user.sayHi()
// user.HowOldAreU()
// user.liveIn()
// console.log(typeof User)

// console.log(Object.getOwnPropertyNames(User.prototype))
////////////////////////////////


// class  Clock{
//    constructor({ template }){
//        this.template = template;
//    } 

//    render(){
//        let date = new Date();

//        let hours = date.getHours();
//        if (hours < 10) hours = "0" + hours;

//        let mins = date.getMinutes();
//        if (mins < 10) mins = "0" + mins;

//        let secs = date.getSeconds();
//        if (secs < 10) secs = "0" + secs;


//        let output = this.template
//        /*.replace Этот метод не меняет вызывающую 
//        строку, а возвращает новую, после замен.*/

//        .replace('h', hours)
//        .replace('m', mins)
//        .replace('s', secs);

//         console.log(output);
//    }
//    start(){
//     this.render();
//     this.timer = setInterval(function(){
//         return this.render
//     }, 1000)
//     //this.timer = setInterval(this.render, 1000)
//    }
//    stop(){
//     clearInterval(this.timer);
//    }
// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();

////////////////////////////////

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed += speed;
//       console.log(this.name + " бежит со скоростью " + this.speed);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(this.name + " стоит.");
//     }
//   }
  
//   //!!!!!Наследуем от Animal указывая "extends Animal"!!!!
//   class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//       }
//     hide() {
//         console.log(this.name + " прячется!");
//     }
//     stop() {
//         //!!!super!!!
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//       }
//   }
  
//   let rabbit = new Rabbit("Белый кролик",10);
  
//   rabbit.run(5); // Белый кролик бежит со скоростью 5.
//   rabbit.hide(); //Белый кролик стоит. Белый кролик прячется!
//   console.log(rabbit.name); // Белый кролик
//   console.log(rabbit.earLength); // 10



class  Clock{
    constructor({template}){
        this.template = template;
    } 
 
    render(){
        let date = new Date();
 
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
 
        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;
 
        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;
 
 
        let output = this.template
        /*.replace Этот метод не меняет вызывающую 
        строку, а возвращает новую, после замен.*/
 
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
 
         console.log(output);
    }
    start(){
     this.render();
     this.timer = setInterval(function(){
		this.render()
	 }.bind(this), 1000);
     //this.timer = setInterval(this.render, 1000)
    }
    stop(){
     clearInterval(this.timer);
    }
 }
 
 let clock = new Clock({template: 'h:m:s'});
 clock.start();
