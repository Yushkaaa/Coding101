/*new Date() Создает объект Date 
с текущей датой и временем*/

// let now = new Date();
// console.log(now)

/*new Date(year, month(с 0), date, hours, minutes, seconds, ms)*/
let birthday = new Date(2015, 2, 10);
console.log(birthday)
console.log(birthday.getDate())
console.log(birthday.getMonth())
console.log(birthday.getFullYear())