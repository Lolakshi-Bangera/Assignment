//eaxample 1

var cars = new Array("Saab",11, "Volvo", null,"BMW", false,{ name:"Thar"});
for (var i= 0; i< cars.length; i++) {
    console.log("car in index",i,cars[i]);
}
console.log("======================================");

//eaxample 2

var marks = new Array("zero",60, true, null,"pass",undefined,{ name:"good"});
for (var i= 0; i< marks.length; i++) {
    console.log("marks in index",i,marks[i]);
}
console.log("======================================");
//eaxample 3

var city = new Array("Bangalore",576101, true, null,"somewhere", undefined,{ name:"venus"})
for (var i= 0; i< city.length; i++) {
    console.log("city in index",i,city[i]);
}
console.log("======================================");

//eaxample 4

var cart = new Array("bottle",2, true, null,"1left",undefined,{ name:"titan"});
for (var i= 0; i< marks.length; i++) {
    console.log("cart in index",i,cart[i]);
}
console.log("======================================");
//eaxample 5

var birds = new Array("kingfisher",90, true, null,"parrot",undefined,{ name:"pigeon"});
for (var i= 0; i< birds.length; i++) {
    console.log("bird in index",i,birds[i]);
}
console.log("======================================");
//1. using new keyword
var shoe =new Object()
    shoe.brand="Mochi"
    shoe.gender="Female" 
    shoe.price= 2500
    shoe.size=6
    shoe.isAvailable=true
    shoe.stamp=function(){
        return shoe.brand+"\n"+shoe.size
    }

console.log(shoe.stamp());