'use strict';

/*1*/
const persons = [
  { name: 'Marc Ave', phone: '+380974253689' },
  { name: 'Park Kave', phone: '+380952368745' },
  { name: 'Dak Moke', phone: '+380965231478' }
];

/*2*/
const findPhoneByName = name => {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name === name) {
      return persons[i].phone;
    }
  }
};
/*Test*/
console.log(findPhoneByName('Park Kave'));
