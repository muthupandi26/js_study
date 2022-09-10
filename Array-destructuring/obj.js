// console.log("Array destructuring");

const restaurant = {
    names : 'spcial one',
    location : "chenni south srivilliputtur",
    categories : ['veg','non-veg','organix'],
    starter : ['biscuits','cookiess','20-20'],
    main : ['bista', 'pasta', 'wheet'],
    openingHours : {
        thu : {
            open :12,
            close :22,
        },
        fri : {
            open :10,
            close :22,
        },
        sat : {
            open :11,
            close :20,
        },
    },
    orderDelivery : function({startIndex, mainIndex, time, address}) {
        console.log(`${startIndex} and ${mainIndex} ${time} , ${address}`);

    },
};

restaurant.orderDelivery({
    time : '10.00',
    address : "srivi",
    mainIndex : 2,
    startIndex :7,
});


const {names,categories,openingHours} = restaurant;
console.log(names,categories,openingHours);

// console.log(names);
// console.log(categories);
// console.log(openingHours);