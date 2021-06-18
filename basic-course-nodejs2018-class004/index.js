const async = require('./sync-callback-promise');

console.log(async.sync('Regulus'));
console.log(async.withCallback('Regulus', async.sync));
async.withPromise('Regulus')
    .then( name => console.log(name))
    .catch( e => console.error(e))