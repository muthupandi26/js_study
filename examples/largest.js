let largest = function(str) {
    
    let words = str.split(" ");
    // console.log(words);
    let large = "";

    for(let value of words) {
        if(value.length > large.length ) large = value;
    }

    return large;
}

console.log(largest("find the largest value in sentence"));