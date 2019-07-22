//для перебора
var elems = document.documentElement.childNodes;

[].forEach.call(elems, function(elem) {
  alert( elem ); // HEAD, текст, BODY
});

///////
/*При помощи Array.prototype.slice сделать из коллекции массив.
Обычно вызов arr.slice(a, b) делает новый массив и копирует 
туда элементы arr с индексами от a до b-1 включительно. Если же
 вызвать его без аргументов arr.slice(), то он делает новый массив 
 и копирует туда все элементы arr.
Это работает и для коллекции:*/
var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems); // теперь elems - массив

elems.forEach(function(elem) {
  alert( elem.tagName ); // HEAD, текст, BODY
});

/*Более правильной и общепринятой практикой является 
доступ к элементу вызовом document.getElementById("идентификатор").*/
<div id="content">Выделим этот элемент</div>
<script>
  var elem = document.getElementById('content');

  elem.style.background = 'red';

  alert( elem == content ); // true

  content.style.background = ""; // один и тот же элемент
</script>
