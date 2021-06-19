const greet = require('./greet');

greet.emit("clap");
greet.emit("greet", "Regulus");
greet.emit("shout", "I would like to married in Russia or Tokio");

greet.emit("call", "Regulus", name => {
    console.log(`Hi! my name is ${name}`);
});