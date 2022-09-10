const person = require('./person');
const Logger = require('./logger')

const logge = new Logger();
logge.on('message', data => console.log('called listener',data))


logge.log("helo");
console.log(person.age);