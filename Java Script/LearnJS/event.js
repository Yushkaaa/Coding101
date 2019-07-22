/*Событие – это сигнал от браузера о том, что что-то произошло. 
События мыши:
click – происходит, когда кликнули на элемент левой кнопкой мыши
contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
mouseover – возникает, когда на элемент наводится мышь
mousedown и mouseup – когда кнопку мыши нажали или отжали
mousemove – при движении мыши
События на элементах управления:
submit – посетитель отправил форму <form>
focus – посетитель фокусируется на элементе, например нажимает на <input>
Клавиатурные события:
keydown – когда посетитель нажимает клавишу
keyup – когда посетитель отпускает клавишу
События документа:
DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.*/

//addEventListener и removeEventListener
//element.addEventListener(event, handler[, phase])
/*event-Имя события, например click
handler-Ссылка на функцию, которую надо поставить обработчиком.
phase-Необязательный аргумент, «фаза», на которой обработчик должен сработать.
Удаление:
передать те же аргументы, что были у addEventListener
element.removeEventListener(event, handler[, phase]);
*/


/*addEventListener позволяет добавлять несколько 
обработчиков на одно событие одного элемента*/

<input id="elem" type="button" value="Нажми меня"/>

<script>
  function handler1() {
    alert('Спасибо!');
  };

  function handler2() {
    alert('Спасибо ещё раз!');
  }

  elem.onclick = function() { alert("Привет"); };
  elem.addEventListener("click", handler1); // Спасибо!
  elem.addEventListener("click", handler2); // Спасибо ещё раз!
</script>