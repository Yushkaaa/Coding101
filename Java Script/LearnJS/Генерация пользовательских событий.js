//https://learn.javascript.ru/dispatch-events


//Событие встроенного класса Event можно создать так:
let event = new Event(type[, options]);
/*type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
options – объект с двумя необязательными свойствами:
bubbles: true/false – если true, тогда событие всплывает.
cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
По умолчанию оба свойства установлены в false: {bubbles: false, cancelable: false}.*/

<button id="elem" onclick="console.log('Клик!');">Автоклик</button>
//////////////////
<script>
  let event = new Event("click");
  elem.dispatchEvent(event);
  {/* После того, как объект события создан, мы должны запустить его 
    на элементе, вызвав метод elem.dispatchEvent(event). */}
</script>


//////////////////////
//Мы можем создать всплывающее событие с именем "hello" и поймать его на document.
//Всё, что нужно сделать – это установить флаг bubbles в true:

<h1 id="elem">Привет из кода!</h1>

<script>
  // ловим на document...
  document.addEventListener("hello", function(event) { // (1)
    alert("Привет от " + event.target.tagName); // Привет от H1
  });

  // ...запуск события на элементе!
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);

  // обработчик на document сработает и выведет сообщение.

</script>