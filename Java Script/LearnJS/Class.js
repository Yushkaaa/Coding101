/*класс – это расширяемый шаблон кода для создания
 объектов, который устанавливает в них начальные 
 значения (свойства) и реализацию поведения (методы).*/

 //!!!Методы в классе не разделяются запятой!!!

 //В JavaScript класс – это разновидность функции

 class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
  
    
    HowOldAreU(){
        console.log(this.name + " is " + this.age + " years old!")
    }
    sayHi(){
        console.log("Hello " + this.name)
    }
}
//иcпользование
let user = new User("Kate", 24);
user.sayHi()
user.HowOldAreU()

//В JavaScript класс – это разновидность функции
console.log(typeof User)


/////////////////////////////////
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed += speed;
      console.log(this.name + " бежит со скоростью " + this.speed);
    }
    stop() {
      this.speed = 0;
      console.log(this.name + " стоит.");
    }
  }
  
  //!!!!!Наследуем от Animal указывая "extends Animal"!!!!
  class Rabbit extends Animal {

    //при конструкторе, нужен super и this
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
      }
    hide() {
        console.log(this.name + " прячется!");
    }
    stop() {
        //!!!super!!!
        super.stop(); // вызываем родительский метод stop
        this.hide(); // и затем hide
      }
  }
  
  let rabbit = new Rabbit("Белый кролик",10);
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.hide(); //Белый кролик стоит. Белый кролик прячется!
  console.log(rabbit.name); // Белый кролик
  console.log(rabbit.earLength); // 10