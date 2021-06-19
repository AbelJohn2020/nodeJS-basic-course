const eventEmitter = require('events');
class MyEmitter extends eventEmitter {};
const myEmitter = new MyEmitter();

myEmitter.on('clap', () => {
    console.log('A clapping event was produced.');
});

myEmitter.on('greet', name => {
    console.log(`Please greet a ${name}!`);
});

myEmitter.on('shout', text => {
    console.log(`Oh... some told you to shout ${text}!!`);
});

myEmitter.on('call', (name, cb) => {
    cb(name);
});

module.exports = myEmitter;