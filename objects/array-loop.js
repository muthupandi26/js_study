// alert("i am alert");

const array1 = [
    "john",
    "cena",
    34,
    ["randy","rey","batista"]
];
console.log(array1);

const array2 = [];

for(let i = 0; i < array1.length;i++) {
    console.log(array1[i]);

    // array2[i] = array1[i];
    array2.push(array1[i]);
}

console.log(array2);


