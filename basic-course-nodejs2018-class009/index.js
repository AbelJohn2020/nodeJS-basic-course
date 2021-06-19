const errors = require('./errors');
const handle = require('./handling');

// try {
//     errors.standarError.range();
// } catch(e) {
//     console.log(e)
// };

try {
    handle.errorFirstCallbackWrong();
} catch(e) {
    console.log(e)
}