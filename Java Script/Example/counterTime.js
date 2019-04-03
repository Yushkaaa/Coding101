var counter = 1;

var printMessage = function () {
  console.log("Ты смотришь в консоль уже " + counter + " сек");
  counter++;
};

//вызов функции в консоле
var intervalId = setInterval(printMessage, 1000);

//отмена таймера(вводить в консоле)
clearInterval(intervalId);
