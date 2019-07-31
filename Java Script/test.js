var y = 5;
var x = function(){
    return y;
};
var z = function(t){
    y = 10; //это не объявление переменной, это ссылка на глобальную переменную
    return t();
};
z(x);

console.log(z(x));