// console.log("hello array's");

let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(-2, 1, 'f')
// console.log(arr);
// console.log(arr)

//slice doesn't affect original array

console.log(arr.slice(0,2));
console.log(arr.slice(1,2));
console.log(arr.slice(2,4));
// console.log(arr.slice(-2,1));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));

//array to array
console.log([...arr]);

//array to object
console.log({...arr});


// splice affect the original array but almost similar to the splice

// console.log(arr.splice(2));
// console.log(arr);

//splice second parameter performs the how many elements we want to remove from the array
arr.splice(1,1);
console.log(arr);


//reverse it also affect the original array

let arr2 = ['a','b','d','c'];

arr2.reverse();
console.log(arr2);


// concat used to concatination the array and store the value

const letter = arr.concat(arr2);
console.log(letter);

console.log(letter.join(' *2'));


// array index and at method

const arr3 = [33,56,98];
console.log(arr3[2]);
// similart to the new array at method
console.log(arr3.at(2));

//getting last element in array

console.log(arr3.length-1);
console.log(arr3[arr3.length-1]);
//also use slice method
console.log(arr3.slice(-3) [0]  ); //get value from the first element form the array
console.log(arr3.at(-3));