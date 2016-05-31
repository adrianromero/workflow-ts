/// <reference path="../typings/index.d.ts" />

import * as mymaths from './mymaths';
import * as _ from 'underscore';

console.log('Hello TypeScript!!!');
console.log('Calculate 2 + 2 = %d.', mymaths.add(2, 2));
console.log('Random number between 1 and 100 = %d.', _.random(1, 100));

var greet = new mymaths.Greeter('Felipe');
console.log(greet.greet());
