//find and filter looks like a similar
// find return the new array
//filter perform the original array
//filter perform all array elements but find performs first condition is statified


//includes perform exactly match the value is present or not and return boolean value
const arr = [200,450,700,-330,540,-200,150];
console.log(arr);


//Equality
console.log(arr.includes(700));

//check with some conditons

console.log(arr.some( (mov) => mov > 600 ));


console.log(arr.some(mov => mov == -30));

//every value is correct then return true