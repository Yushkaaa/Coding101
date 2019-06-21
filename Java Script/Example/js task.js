
const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 
//return ['This', 'will', 'all', 'make', 'sense.'];


const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens)
/*Oh powerful Blorgous, we humans offer our unconditional surrender!
Oh powerful Glamyx, we humans offer our unconditional surrender!
Oh powerful Wegord, we humans offer our unconditional surrender!
Oh powerful SpaceKing, we humans offer our unconditional surrender!*/
