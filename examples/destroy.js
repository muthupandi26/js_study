const destroy = function(arr) {
    
    // console.log(arguments);
    let args = Array.from(arguments); 
    console.log(args);
    args.splice(0,1);
    console.log(args);
    let targets = args;
    console.log(targets);
    let result =[];

    for(let value of arr){
        if(targets.indexOf(value) === -1) result.push(value);
        // console.log(value)
    }
    return result;
}


console.log(destroy([1,2,3,4,5,6],2,3,4));