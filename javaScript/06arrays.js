//Arrays
let names = ["enes", 'fatih', 'emin', 'ahmet'];
let ages = [20, 19, 20, 21];
let mix = ['enes', 20, ['sevval', 19]];
console.log(names);
console.log(typeof names);
console.log(ages);
console.log(mix);
//get array item 
console.log(names[0]);
//set array item
names[0] = 'idris';
console.log(names);
//add item
names[5] = 1903;
names[names.length] = 'ankara';
console.log(names);
names.push('besiktas'); //sonuna ekler

console.log(names);
names.unshift(2002);
console.log(names);
//remove item
ages.pop(); //sondaki elemani cikartir 

console.log(ages);
ages.shift(); //bastaki elemani cikartir

console.log(ages);
//indexOf
let index = names.indexOf('fatih');
console.log('index: ' + index);
//reverse
names.reverse();
console.log(names);
//siralama
ages.sort();
console.log(ages);
names.sort();
console.log(names);
//dizi birlestirme
let veri = names.concat(ages);
console.log(veri);
names.splice(3, 0, 'mehmet'); //silmeden ekledi

console.log(names);
names.splice(2, 1, 'eren'); //silip ekledi

console.log(names);
