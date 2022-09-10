const arr = [5,6,7,8,10];

const badArr = [1,2,5,arr[0],arr[1],arr[2],arr[3]];
console.log(badArr);

const newArr = [...arr];
console.log(newArr);

console.log(...newArr);

/* spread elements helps get out values from the array 
main use case ==> takes all the elements form the array and doesn't create new variable
values separate by commas (multiple value separated by comma) */

const str = "muthu";
const letter = [...str];
console.log(letter);

const str1 = ["muthu","common","will", "do"];
// str1.forEach( (val) => console.log(val) );
const letter1 = [...str1];
console.log(letter1);


function order (value1,value2,value3) {
    console.log(`${value1},${value2}...${value3}`);
}

// const values = [prompt("say 1st one value"),prompt("say 2nd one value"),prompt("say 3rd one value")];

const values = ([2,7,9]);
// console.log(values);

order(...values);
