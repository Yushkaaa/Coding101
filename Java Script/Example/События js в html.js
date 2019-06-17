///////// открывает графу moreInfo
let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// Write your code here:
readMore.onclick = function() {
  moreInfo.style.display = 'block';
}


//////////// на нажитие view 'Hello, World!'
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function() {
  margo.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  margo.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
let textChange = function() {
  view.innerHTML = 'Hello, World!';
}
let textReturn = function() {
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);


///////removeEventListener
let door = document.getElementById('door');
let unlock = document.getElementById('unlock');
let lock = document.getElementById('lock');
let sign = document.getElementById('sign');
let cafeImage = document.getElementById('image');

cafeImage.hidden = true;

let openDoor = function() {
  door.hidden = true;
  cafeImage.hidden = false;
}

let closeDoor = function(){
  door.hidden = false;
  cafeImage.hidden = true;
}

unlock.onclick = function() {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
}

lock.onclick = function() {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
}

unlock.addEventListener('click', function(){
  door.addEventListener('click', openDoor);
  image.addEventListener('click', closeDoor);
  
})
lock.addEventListener('click',function(){
  door.removeEventListener('click', openDoor)
}) 

