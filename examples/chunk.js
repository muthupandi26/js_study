console.log("ello");

const chunky = function(arr,size) {
    
    let groups = [];
    while(arr.length > 0) {
        groups.push(arr.slice(0,size));
        // groups.push(arr.splice(0,size));
        arr = arr.slice(size);
        // console.log(arr);
    }
    // return groups;
    console.log(groups);
}

chunky(["a","b","c","d"],2);
// console.log(chunky(["a","b","c","d"],2));