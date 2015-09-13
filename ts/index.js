/// <reference path="../typings/tsd.d.ts" />
var mymaths = require('./mymaths');
var _ = require('underscore');
console.log('Hello TypeScript!!!');
console.log('Calculate 2 + 2 = %d.', mymaths.add(2, 2));
console.log('Random number between 1 and 100 = %d.', _.random(1, 100));
var greet = new mymaths.Greeter('Felipe');
console.log(greet.greet());
