//Prototype
 let person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
 };

person.prototype.calculateAge= function(){
    return 2022-this.yearOfBirth;
}


 let aylin = new person("aylin",1977,"fireman");



 console.log(aylin);
 console.log(aylin.calculateAge())