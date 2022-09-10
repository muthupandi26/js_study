const arr = [1,2,3,4,5,6];
console.log(arr);
console.log(new Array(7,8,9,10));

//Empty array 
const x = new Array(7);
console.log(x);

//Empty array + fill some value
x.fill('k');
console.log(x);

//fill for specified places
x.fill('a',2,3);
console.log(x);


//Array.from method
const y = Array.from({length : 7},() => 1 );
console.log(y);

const z = Array.from({length : 7},(_,i) => i+1 );
console.log(z);

