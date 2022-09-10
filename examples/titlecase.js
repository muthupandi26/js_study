let title = function(str) {
    let words = str.toLowerCase().split(" ");
    console.log(words);
    for(let i=0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
    // return words;
}

console.log(title("I am little tea pot"));


// function title(str) {
//     let titled = str.toLowerCase().split(" ").map(function(elem) {
//         return elem[0].toUpperCase() + elem.slice(1);
//     })
//     return titled.join(" ");
// }

// console.log(title("I am little tea pot"));