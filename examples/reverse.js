let reverse = function(str) {
    // console.log(str);
    // let spilt = str.split("");
    // let reverse = spilt.reverse();
    // let join = reverse.join("");
    // console.log(join);

    // return str.split("").reverse().join("");

    let final = "";
    for(let i = str.length-1; i >= 0; i--) {
        final += str[i];
    }
    return final;
}

// reverse("hello");
// console.log(reverse("hello"));

console.log(reverse("hello"));

