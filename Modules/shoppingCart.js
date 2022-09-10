//Exporting module

console.log("exporting section");

const shop = 20;
const cart = [];

export const addToCart = function (product, quanitity) {
    cart.push({product, quanitity});
    console.log(cart);
    console.log( `${quanitity} ${product} added to cart` );
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };


// Default export

// export default function (product, quanitity) {
//         cart.push({product, quanitity});
//         console.log(cart);
//         console.log( `${quanitity} ${product} added to cart` );
//     };



let person = {
    firstName : "john",
    lastname : "abc"
};

const arr = ["john","abc"];

arr.forEach((value,index,array) => {
    console.log(index);
});
    