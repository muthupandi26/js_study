const largest = function(arr) {

    let max = [];
    for(let i = 0; i < arr.length; i++ ){
        let tempMax = arr[i][0];
        for(let j = 0; j < arr[i].length; j++) {
            let currentElement = arr[i][j];
            if(currentElement >= tempMax) {
                tempMax = currentElement;
            }   
        }
        max.push(tempMax);
    }
    return max;
}

let value = largest([[455,2,3],[35,87,90,33],[22,33,44,11],[9,8,7,66]]);
console.log(value);

// Another way 

const large2 = function(arr) {
    let max2 = [];
    for(let i = 0; i < arr.length; i++) {
        let temp2 = arr[i][0];
        for(let j = 0; j < arr[i].length; j++){
            let current2 = arr[i][j];
            if(current2 >= temp2) {
                temp2 = current2;
            }
        }
        max2.push(temp2);
    }
    return max2;
}

console.log(large2([[455,2,3],[35,87,90,33],[22,33,44,11],[9,8,7,66]]));