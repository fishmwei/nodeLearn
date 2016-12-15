var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('newListener', ()=>{console.log("add a listener")});
eventEmitter.on('removeListener', ()=>{console.log("remove a listener")});

var eventHandler = function () { console.log('Recv Hello')};
var eventHandler1 = function () { console.log('1 Recv Hello')};

eventEmitter.on('Hello', eventHandler);
eventEmitter.on('Hello', eventHandler1);
eventEmitter.addListener('B', eventHandler1);
console.log('begin send Hello');
eventEmitter.emit('B');

var listeners = eventEmitter.listeners('B');
console.log(listeners);

eventEmitter.removeListener('B', eventHandler1);
