'use strict';

const persons = {
  'Marc Ave': { phone: '+380974253689' },
  'Park Kave': { phone: '+380952368745' },
  'Dak Moke': { phone: '+380965231478' }
};

const findPhoneByName = name => persons[name].phone;
/*Test*/
console.log(findPhoneByName('Dak Moke'));

