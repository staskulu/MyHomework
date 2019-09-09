'use strict';

// eslint-disable-next-line prefer-const
let myName = 'Stas';
const YEAR_OF_BIRTH = 1990;

const hello = name => {
  console.log(`Hello, ${name}!`);
};
hello('Stas');
hello(myName);
hello(YEAR_OF_BIRTH);
