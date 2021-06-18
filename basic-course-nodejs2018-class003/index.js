const addition = require('./addition');
const intensive = require('./intensive');

addition.syncSum(4, 5);
addition.asyncSum(4, 6);
intensive.simulateSync();
intensive.simulateAsync();