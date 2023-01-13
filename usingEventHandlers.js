// An event is basically a signal that indicates that something has happened
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){
    console.log("Listener called", arg);
})

// Raise an event
emitter.emit('messageLogged', {id : 1, url : "http://"});

// emit method means you're signalling that something happened
// A listener is a function that should be called when that event is raised
