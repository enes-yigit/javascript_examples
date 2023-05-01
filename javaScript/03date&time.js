//DATE Object
let zaman = new Date();
let birthDay = new Date(2002, 04, 21);
//Set Methods
zaman.setDate(21);
zaman.setMonth(4);
// Get Methods
console.log(zaman.getDate());
console.log(zaman.getMonth());
console.log(zaman.getHours());
console.log(zaman.getFullYear() - birthDay.getFullYear());
console.log(zaman);
console.log(typeof zaman);
