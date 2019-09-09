"use strict";

/*1*/
const average = (a, b) => {
  return (a + b) / 2;
};

/*2*/
const square = x => x * x;

/*3*/
const cube = x => x**3;

/*4*/
for (let i = 1; i <= 5; i++) {
  console.log(average(square(i), cube(i)));
}
