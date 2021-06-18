// import Operations from './math';
// import SayHello from './sayhello';

const math = require('./math');
const sayhello = require('./sayhello');

console.log(math.add(4, 5));
console.log(math.substraction(4, 5));
console.log(math.multiply(4, 5));
console.log(math.division(4, 5));

console.log(sayhello.sayhello('Regulus'));