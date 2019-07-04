/////перебор элементов массива

var arr = ["Яблоко", "Апельсин", "Груша"];
for (var i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

//length – не количество элементов массива, а последний индекс + 1!!!
var arr = [];
arr[1000] = true;
alert(arr.length); // 1001


/////обьявление массива

// предпочтительное
var arr = [элемент1, элемент2...];

// new Array
var arr = new Array(элемент1, элемент2...);



/////Операции с концом массива:

arr.push(элемент1, элемент2...) //добавляет элементы в конец.
var elem = arr.pop() //удаляет и возвращает последний элемент.

//Операции с началом массива:

arr.unshift(элемент1, элемент2...) //добавляет элементы в начало.
var elem = arr.shift() //удаляет и возвращает первый элемент.


////метод arr.concat - обьединяет массивы
[1,2].concat[3,4,5,6] //[1,2,3,4,5,6]

///метод slice копирует участок массивов
var arr = [0,1,2,3,4,5]
var a = arr.slince(1,4)//участок который нуно скопировать
console.log(a)//[1,2,3]
//если не указывать индекс - скоппирует весь массив

///метод split(s)- позволяет превратить строку
// в массив, разбив ее по разделителю s
var names = 'Маша, Петя, Марина, Василий';
var arr = names.split(', ');
for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}

//Разбивка по буквам
var str = "тест";
alert( str.split('') ); // т,е,с,т

/////метод join -   Он берет массив и склеивает
// его в строку, используя str как разделитель.
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr.join(';');
alert( str ); // Маша;Петя;Марина;Василий

//// sort - сортирует 
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  var arr = [ 1, 2, 15 ];
  arr.sort(compareNumeric);
  
  alert(arr);  // 1, 2, 15


////reverse - меняет порядок на обратный
var arr = [1, 2, 3];
arr.reverse();
alert( arr ); // 3,2,1


/////indexOf(searchElement[, fromIndex]) возвращает номер 
//элемента searchElement в массиве arr или -1, если его нет.
var arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

