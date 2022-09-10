// console.log("objects");

const muthu = {
    firstName: 'John',
    lastName: 'cena',
    age: 2021-1999,
    birthyear:1999,
    job: 'fighter',
    friends: ['undertaker','randy','triple'],

    // calcage: function(birthyear) {
    //     return 2021 - birthyear;
    // }

    // calcage: function() {
    //     console.log(this);
    //     return 2021 - this.birthyear;
    // }

    calcage: function() {
        this.agee = 2021 - this.birthyear;
        return this.agee;
    },
    getsummary: function() {
        return `${this.firstName} is a ${this.calcage()} years old ${this.job}..`;
    }
};

console.log(muthu.calcage());

console.log(muthu.agee);
console.log(muthu.agee);
console.log(muthu.agee);
// console.log(muthu['calcage'](1999));    

//o/p ==> "muthu" is 22 years, figter and ....
console.log(muthu.getsummary());

console.log(muthu.friends);

for(let i = 0; i < muthu.friends.length; i++)
{
    console.log(muthu.friends[i]);
}