//NaN (Not-A-Number)-возвращается eсли математическая операция не может быть совершена  
alert( 0 / 0 ); // NaN

//isNaN(n) - проверка nan
var n = 0 / 0;
alert( isNaN(n) ); // true
alert( isNaN("12") ); // false, строка преобразовалась к обычному числу 12

var n = 0 / 0;
if (n !== n) alert( 'n = NaN!' );

//isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity/-Infinity:
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false

// "+" преобразовывает в число
var s = "12.34";
alert( +s ); // 12.34
alert( +"  -12" ); // -12
alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
alert( +"" ); // 0, пустая строка становится нулем
alert( +"1 2" ); // NaN, пробел посередине числа - ошибка