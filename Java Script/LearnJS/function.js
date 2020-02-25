function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  function showOk() {
    alert( "Вы согласны." );
  }

  function showCancel() {
    alert( "Вы отменили выполнение." );
  }

  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);

  // второй вариант
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

  //Здесь функции объявляются прямо внутри вызова ask(...).
  //У них нет имён, поэтому они называются анонимными.