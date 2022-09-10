const movement = [100,300,400,-270,-450,650];

// console.log({...movement})

movement.forEach(function(move,index,array) {
    // console.log(array);
    console.log (` { ${index} : ${move} }`);
} );
    

// const hii = movement.map( (value,i) => `   ${i} : ${value} ` ).join('');

// console.log(hii);