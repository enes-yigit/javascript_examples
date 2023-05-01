//Number
let veri;
//  veri = Number("5");
//  veri = parseInt("5");
//  veri = parseFloat("5.5");
//  veri = parseInt("5c");
//  veri = parseInt("c5");
//  veri = isNaN("c5");
//  veri = isNaN("5")
var sayi = 13.2613162123;
veri = sayi.toPrecision(5); //kac rakam alinacak

veri = sayi.toFixed(3); //virgulden sonra kac rakam

veri = Math.PI;
veri = Math.round(3.5);
veri = Math.round(3.2);
veri = Math.ceil(4.2);
veri = Math.floor(4.9);
veri = Math.pow(4, 4);
veri = Math.sqrt(81);
veri = Math.abs(-50);
veri = Math.min(1, 2, 4, 6, 8, 9);
veri = Math.max(12, 3, 5, 654, 67);
veri = Math.floor(veri = Math.random() * 100);
console.log(veri);
console.log(typeof veri);
