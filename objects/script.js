// console.log("hello");

const muthu = {
    firstName: 'John',
    lastName: 'cena',
    age: 2021-1999,
    job: 'fighter',
    friends: ['undertaker','randy','triple'],
    hii : 2
};

console.log(muthu);

//.(dot) only used an real object name EX: muthu.

console.log(muthu.hii);
console.log(muthu.firstName);
console.log(muthu['lastName']);

// Bracket notation we can give any operation
nameKey ='Name';
console.log(muthu['first' + nameKey]);
console.log(muthu['last' + nameKey]);

//add new values in objects
muthu.location = "srivilliputtur";
muthu['insta'] = "muthu@";
console.log(muthu);

//o/p ===> muthu has 3 friends, and his one of friend is randy

console.log(`${muthu.firstName} has ${muthu.friends.length} and his one of friend ${muthu.friends[1]}`);