const falsy = function(arr) {

    let truthy = [];
    for(let value of arr)
    {
        if(value) truthy.push(value);
    }

    // Another method

    return arr.filter((elem) => elem)
    return truthy;
}

console.log(falsy([9, "hello",76, "", undefined,"hai", null]));