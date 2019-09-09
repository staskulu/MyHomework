'use strict';

/*Part 1*/
const array = [
  23,
  'word',
  75,
  true,
  { s: 1, z: 2 },
  -34,
  'saga',
  'false',
  false,
];

const object = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
};

for (const ar of array) {
  object[typeof ar]++;
}

/*Test*/
console.log(object);

/*Part 2*/

const object2 = {};

for (const ar of array) {
  object2[typeof ar] = 0;
}

/*Test*/
console.log(object2);


