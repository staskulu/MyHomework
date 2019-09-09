"use strict";

/*1*/
const person1 = {
  name: "Stas"
};

/*2*/
let person2 = {
  name: "Sasha"
};

/*3*/
person1.name = "Olya";
person2.name = "Kolay";

/*4*/
/*person1 = {
  city:"Kyiv" //it doesn't work!
};*/
person2 = {
  city: "Kyiv"
};

/*5*/
/*We can't change identifier "person1" - becouse it's const;
and "person2" we changed*/

const createUser = (name, city) => ({
  name: name,
  city: city
});

/*Test*/
console.log(createUser("Marcus Aurelius", "Roma"));
