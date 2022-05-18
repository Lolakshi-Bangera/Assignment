//1. for of loop
//example 1

var jewel=["chain","bangle","earring","ring"] 
for(var piece of jewel){
    console.log("jewel:",piece);
}
console.log("===================================");

//example 2

var color=["white","blue","gray","brown"] 
for(var reflection of color){
    console.log("color:",reflection);
}
console.log("===================================");

//example 3

var vehicle=["bus","auto","metro","cab"] 
for(var type of vehicle){
    console.log("vehicle:",type);
}
console.log("===================================");

//example 4

var fruits=["mango","banana","kiwi","lichi"] 
for(var onefruit of fruits){
    console.log("fruits:",onefruit);
}
console.log("===================================");

//example 5

var flower=["rose","jasmine","sunflower","dalia"] 
for(var fragrance of flower){
    console.log("flower:",fragrance);
}
console.log("===================================");

//for of loop cannot be used for iterating through object

//2. for in loop

//Example 2
var language={
    lang1:"java",
    lang2:"sql",
    lang3:"javascipt",
    lang4:"css",
    lang5:"html"
}
for (var count in language){
    console.log(`${count} is ${language[count]}`);
}
console.log("===================================");
var fruits1={
    fruit1:"Apple",
    fruit2:"banana",
    fruit3:"kiwi",
    fruit4:"lichi",
    fruit5:"grapes"
}
for(var key in fruits1){
    console.log(`key is ${key} value is ${fruits1[key]}`);
}
console.log("===================================");

//Example 3

var fruits=["banana","kiwi","papaya","orange"] 
for(var index in fruits){
    console.log(`fruits in ${index} : ${fruits[index]}`);
}
console.log("===================================");
//Example 4

var bikes=["ninja","tvs","suzuki","hero"] 
for(var index in bikes){
    console.log(`Bikes in ${index} : ${bikes[index]}`);
}
console.log("===================================");
//Example 5

var brand=["hp","dell","accer","lenovo"] 
for(var name in brand){
    console.log(`Computer in ${name} : ${brand[name]}`);
}