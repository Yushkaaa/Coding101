/*setTimeout
setTimeout- позволяет вызвать функцию (!)один раз(!) через определённый интервал времени*/
/* передавать но не запускать функцию
!пример внизу не правильный!
setTimeout(sayHi(), 1000);*/

//пример 1
 function sayHi(){
     console.log("Hello")
 }
setTimeout(sayHi, 1000)
//выведет hello через 1сек


//Пример 2,c аргументами

function saySmth(phrase1, phrase2){
    console.log(phrase1 + ", " + phrase2)
}
setTimeout(saySmth, 1000, "Привет", "Катя")


/*setInterval
setTimeout- позволяет вызвать функцию (!)регулярно(!) через определённый интервал времени*/

// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


/* рекурсивный setTimeout*/


/*вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);




  //TASK 1
  /*Напишите функцию printNumbers(from, to), 
  которая выводит число каждую секунду, начиная от from и заканчивая to.*/

//через setTimeout
function printNumbers(from, to){
    let number = from;
    setTimeout( function plus(){
        console.log(number)
        if (number < to){
            setTimeout(plus, 1000)
        }number++;
    },1000)
}
printNumbers(0,10)

 
//через setInterval
//вариант №1, неработает,зациклен
function plus(from, to){
    let number = from;
     console.log(number);
    
    for ( ;number<to;){
        number++
        console.log(number)
    }
}
setInterval(plus, 1000, 1,5)


//вариант №2, неработает, нет интервала
function printNumbers(from, to){
    let number = from;
    console.log(number);

    let plus = setInterval(function(){
        for ( ;number<to;){
            number++
            console.log(number)
        }
        if(number = to){
            clearInterval(plus);
          }

    },500)
   }
   printNumbers(1,10)


   ///Вариант 3
   function printNumbers(from, to){
    let number = from;

    let num = setInterval(function(){
        console.log(number)
        if (number=== to){
            clearInterval(num)
        }
        number++;
    },500)
}
printNumbers(1,10)

//вариант от Миши
  function myFunc(from,to){
        if (from < to){
            console.log(from);
            setInterval(myFunc, 1000, from+1,to)
        }
    }
    myFunc(1,10)



    ////пример функции высш. ранга
    const name = ['Kate', 'Dasha', 'Mike'];

    function mapArray(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++){
            result.push(fn(arr[i]));
            // console.log(arr[i])
        };
        //console.log(result)
        return result;    
     } 
    
    function nameLenght(el){
         console.log(el)
        return el.length
        // console.log(el.length)
     }
    
    function nameToUpperCase(el){
         return el.toUpperCase();
     }
     const res = mapArray(name, nameLenght);
     console.log(res)
     const res2 = mapArray(name, nameToUpperCase);
     console.log(res2)
    
    //mapArray(name, nameLenght);
    //console.log(name)
     //nameLenght("kate")