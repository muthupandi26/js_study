const end = function(str,target) {

    // if(str.endsWith(target)) return true;
    // else return false;

    // Another Method
    console.log(target.length);
    console.log(str.slice(-target.length));
    return str.slice(-target.length) === target;
    
}


console.log(end("i am string","string"))