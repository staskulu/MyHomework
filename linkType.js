'use strict';

const inc = num => {
  num.n++;
  return this;
};

const obj = { n: 5 };
inc(obj);
console.dir(obj);


