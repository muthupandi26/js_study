//flated all the array

const arr = [ [1,2,3], [4,5,6], 7,8 ];
console.log(arr);
const newArr = [...arr];
console.log(newArr);

//flat --> break inside array and put all in one array
console.log(arr.flat());
// flat --> only one level of array to flatning

const arrDeep = [ [[1,2],3], [4,[5,6]], 7,8 ];
console.log(arrDeep.flat(2));

//flat we can go inside array
//flatMap we cannot go inside one another array

