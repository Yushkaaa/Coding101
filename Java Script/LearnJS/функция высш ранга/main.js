const name = ['Kate', 'Dasha', 'Mike'];

function mapArray(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]));
        // console.log(arr[i])
    };
    //console.log(result)
    return result;    
 } 

 function nameLenght(el){
     console.log(el)
    return el.length
    // console.log(el.length)
 }

 function nameToUpperCase(el){
     return el.toUpperCase();
 }
 const res = mapArray(name, nameLenght);
 console.log(res)
 const res2 = mapArray(name, nameToUpperCase);
 console.log(res2)

//mapArray(name, nameLenght);
//console.log(name)
 //nameLenght("kate")