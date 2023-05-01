//STRING
const firstname = "enes";
const lastname = "yigit";
const yas = 20;
let hobbies = "kitap yazilim oyun spor";
let veri;
//String Concatenations
veri = firstname + " " + lastname;
veri = "enes";
veri += " yigit";
veri = "benim adim " + firstname + " " + lastname + " ankara\da dogdum " + yas + " yasindayim";
veri = firstname.concat(" ", lastname);
//uppercase-lowercase
veri = veri.toUpperCase();
veri = veri.toLowerCase();
//veri = veri.substring(3,10);
//veri = veri.slice(3,7);
//veri = veri.indexOf("e");
//veri = veri.replace("enes", "idris");
//veri = veri.length;
veri = hobbies.split(" ");
console.log(veri);
console.log(typeof veri);
