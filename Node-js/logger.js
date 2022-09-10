const Event = require('events');

class Logger extends Event {
    
    log(msg) {
        this.emit('message',{id : 2, msg})
    }

}

module.exports = Logger;