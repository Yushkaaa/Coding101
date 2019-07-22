for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i);
}

for (var i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
///
if (условие) {
    a();
  } else {
    b();
  }
  //Аналогична записи:

  условие ? a() : b();