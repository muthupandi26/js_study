const identify = function(arr, num) {
    arr.sort( (a,b) => a-b);

    for(let i = 0; i < arr.length; i++) {
        if(num <= arr[i]) {
            return i;
        }
    }

    // return arr;
}


console.log(identify([40,50,5],8));