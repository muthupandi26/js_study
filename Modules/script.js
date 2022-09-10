// Import all 
// import * as shoppingCart from './shoppingCart.js';


// Import module
import { addToCart, totalQuantity, totalPrice } from './shoppingCart.js';
console.log("Importing Section");

addToCart("cake", 4);

console.log(totalPrice);
console.log(totalQuantity);


//Default export 

// import add from './shoppingCart.js';
// add("coffee", 3);