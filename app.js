/** @format */

//  #2
console.log("Plokhenko");

// #3
let myName;
let age;

myName = "Artem";
age = 36;

console.log(myName, age);

myName = age;

console.log(myName, age);

// #4
let personality = {
  name: "Artem",
  age: 36,
  man: true,
  health: undefined,
  damage: null,
};

console.log(typeof personality.name);
console.log(typeof personality.age);
console.log(typeof personality.man);
console.log(typeof personality.health);
console.log(typeof personality.damage);

// #5
let isAdult = confirm("Do you are 18 years old?");

console.log(isAdult);

// #6
let name;
let secondName;
let groupName;
let birthday;
let maritalStatus;
let a;
let work;

console.log(typeof +(birthday = "10.12.1986"));
console.log(typeof (maritalStatus = true));
console.log(typeof (name = "Artem"));
console.log(typeof (secondName = "Plokhenko"));
console.log(typeof (groupName = "JS Fundamentals"));
console.log(typeof (a = null));
console.log(typeof work);

// #7
let userLogin = prompt("Name yours Login", "");
let userEmail = prompt("Name yours Email", "");
let userPassword = prompt("Name yours Password", "");

alert(`Dear User, your Login, ${userLogin}`);
alert(`Dear User, your Email, ${userEmail}`);
alert(`Dear User, your Password, ${userPassword}`);

// #8
let sec = 60;
let min = sec;
let hour = sec * min;
console.log(hour);

let day = 24 * sec * 60;
console.log(day);

let month = 31 * 24 * min * sec;
console.log(month);

// ***

let numSeat = +prompt("Please enter your number compartment", "");
let num;

// Будемо вважати що в нас 24 місця або 4 купе

// 1)
if (numSeat > 24) {
  console.log(`There are no free seats in the carriage`);
} else {
  num =
    numSeat % 2 === 0
      ? `You have the top seat #${numSeat}`
      : `You have a lower seat #${numSeat}`;

  console.log(num);
  alert(num);
}

// 2)
if (
  numSeat == 5 ||
  numSeat == 6 ||
  numSeat == 11 ||
  numSeat == 12 ||
  numSeat == 17 ||
  numSeat == 18 ||
  numSeat == 23 ||
  numSeat == 24
) {
  console.log(`You have a side seat #${numSeat}`);
  alert(`You have a side seat #${numSeat}`);
}

// 3)
let res;
if (numSeat <= 4) {
  res = 1;
  console.log(`You have a #${res} compartment`);
  alert(`You have a #${res} compartment`);
} else if (numSeat > 4 && numSeat < 11) {
  res = 2;
  console.log(`You have a #${res} compartment`);
  alert(`You have a #${res} compartment`);
} else if (numSeat > 17 && numSeat < 23) {
  res = 3;
  console.log(`You have a #${res} compartment`);
  alert(`You have a #${res} compartment`);
}
