console.log("hello")
const mutation = function(arr) {
    
    let firstword = arr[0].toLowerCase();
    let secondword = arr[1].toLowerCase();
    console.log(secondword);
    let value = 0;

    // for(let word of secondword) {
    //     if(firstword.indexOf(word) === -1) value =1 ;
    // }

    for(let word2 of secondword) {
        console.log(word2);
        if(!firstword.includes(word2)) value = 1;
    }

    if(value == 0){
        console.log("sari");
    }
    else console.log("wrong");
  
}

mutation( ["hello","hey"] )