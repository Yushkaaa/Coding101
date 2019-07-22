switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
///переписать в if..else

if (browser = 'IE'){
      alert( 'О, да у вас IE!' );
    }
    else if(browser === 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera'){
      alert( 'Да, и эти браузеры мы поддерживаем' )
    }else{
      alert( 'Мы надеемся, что и в вашем браузере все ок!' );
  }