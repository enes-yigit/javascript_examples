//functions
function merhaba() {
    console.log("merhaba");
}
merhaba();
function yasHesapla(dogumYili) {
    return 2022 - dogumYili;
}
function selam(name, age) {
    console.log(`adiniz:${name} yasiniz: ${yasHesapla(2002)}`);
}
selam("enes", 20);
let ageSumeyye = yasHesapla(1998);
console.log(ageSumeyye);



//Fonksiyounu olustururken almasi gereken degerler girilir
//fonksiyonu cagirirken almasi gereken parametrelerin degerlerini yazarsin