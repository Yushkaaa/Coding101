//  Bind - не вызывает функцию, но возвращает ее с нужным контекстом//  вызывает новую функцию, с привязанным контекстом
//  call - вызов в контексте// вызов функции с каким-то контекстиом
//  apply - вызов в контексте// вызов функции с каким-то контекстном// отличается тем что вторым аргументом принимает массив аргументов 

//Декоратор – это обёртка вокруг функции, которая изменяет
// поведение последней. Основная работа по-прежнему выполняется функцией.


//функция bind, являентся простым примером декоратора
function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }
  //Вызов bind(func, context) возвращает обёртку, которая 
  //ставит this и передаёт основную работу функции func.

  //функция call
  function sayHi(){
    console.log(this.name)
}
let user1 = { name : "Kate"}
let user2 = {name : "Yush"}

// используем 'call' для передачи различных объектов как 'this'
sayHi(user1)//undefined
sayHi.call(user2)//Yush//this = user2


// Здесь мы используем call для вызова say с заданным контекстом и фразой
function saySmth(phrase){
    console.log(this.name + ": " + phrase)
}
let user = {name : "Kate"}
// 'user' становится 'this', и "Hello" становится первым аргументом(phrase)
saySmth.call(user, "Hello")//Kate: Hello



/////
function doSmth(name){
    console.log("Hello " + name)
}
function Dec(wrapped){
    return function(){
        console.log("Starting")
        let result = wrapped.apply(this, arg)
        console.log("Finished")
        return result
    }
}

doSmth("Kate")

wrapped("Kate", "Yush")