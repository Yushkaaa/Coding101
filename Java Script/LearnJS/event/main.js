(function() {

//  let el = document.getElementById('box');
//  el.onclick = function(){
//      this.style.backgroundColor = "yellow"

//  };

let buttons = document.getElementsByTagName('button'); 
let changeColor = function(e) {
    console.log( e );
    console.log( e.type);
    console.log( e.target);
    console.log( e.currentTarget);//то на чем весит событие, 
    console.log(this)//то же самое

    

    if (this.id === 'day') {
        document.body.className = 'day';
    } else if (this.id ==='night') {
        document.body.className = 'night';
    }
};
let sayHi = function(){
    alert('Ура! Мы добавили на кнопку втоорой обработчик');
}

for (let i = 0, len = buttons.length; i < len; i++) { 
    buttons[i].addEventListener('click',changeColor, false );
    buttons[i].addEventListener('click',sayHi, false );
    //удаляем
    buttons[i].removeEventListener('click', sayHi, false)
};

}) ();
