//strings
const own = ['john', 'cena','triple','undertak','arun' ];
console.log(own.sort());

//numbers
const arr = [200,450,700,-330,540,-200,150];
// console.log(arr.sort());
console.log(arr);
// number array doesnot work properly in sort method

// return < 0, A, B (keep order)
// return > 0, A, B (switch order)

//ascending
arr.sort( (a,b) => {
    if(a>b) return 1;
    if(a<b) return -1;
});
console.log(arr);

//decending
arr.sort( (a,b) => {
    if(a>b) return -1;
    if(a<b) return 1;
});
console.log(arr);