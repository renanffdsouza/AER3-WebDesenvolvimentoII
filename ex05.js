var events = require('events');

var eventEmitter = new events.EventEmitter();

const listenerPrintRandomArray = () => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return console.log(randomElement);
}

const listenerPrintMonthNumber = () => {
    return console.log(new Date().getMonth()+1);
}
eventEmitter.on('connection', listenerPrintRandomArray);
eventEmitter.on('connection', listenerPrintMonthNumber);

eventEmitter.emit('connection');