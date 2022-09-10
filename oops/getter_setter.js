const account = {
    owner: "john",
    movement: [200,560,780,300],
    
    get latest() {
        return this.movement.slice(-1).pop();
    },

    set latest(mov) {
        this.movement.push(mov);
    }
};
console.log(account.latest);

account.latest = 60;

console.log(account.movement);