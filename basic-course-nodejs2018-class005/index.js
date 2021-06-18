const promise = require('./async-await');

promise.greet("Regulus, Ileas's son");

// WITH PROMISE

// promise.withPromise("Regulus", "Ileas's son")
//     .then(res => console.log(`${res}`))
//     .catch( e => console.error(e));

async function thePromiseWithAsyncAndAwait() {
    const request = await promise.withPromise("Regulus", "Ileas's son");
    console.log(request);
}

thePromiseWithAsyncAndAwait();