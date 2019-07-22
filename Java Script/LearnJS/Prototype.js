//Prototype
//__proto__

let animals = {
    eat : true
};
 let cat = {
     sound : "meow" 
 }
 let bird = {
     fly: true
 }
 cat.__proto__= animals;
 bird.__proto__=animals;

 console.log(cat.eat)
 console.log(cat.fly)

 /*Объект, на который указывает ссылка __proto__, 
 называется «прототипом». В данном случае получилось,
  что animal является прототипом для cat и bird*/

  console.log(cat)
  console.log(animals.fly)