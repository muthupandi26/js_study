// const repeat = function(str,num) {
    
//     if(num < 0 ) return " ";
//     return str.repeat(num);
// }

// console.log(repeat("abc",3));


// const repeat = function(str,num) {
    
//     var final = " ";
//     if(num < 0) return "";
    
//     for(let i = 0; i < num; i++){
//         final += str;
//     }
//     return final;
// }

// console.log(repeat("abcd",3));

// Tried Recursion

const repeat = function(str,num) {
    
    if(num < 0 ) return " ";
    if(num === 1) return str;

    return str + repeat(str, num-1);
}

console.log(repeat("abc",3));