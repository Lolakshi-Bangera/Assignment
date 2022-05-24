//rest parameter =>nums is an array which can hold n no of arguments
console.log("rest parameter");
console.log("example 1");
function sum(...nums){
    let sum=0; 
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    console.log(sum);
}
sum(10,20,30,40,50,60)


console.log("spread parameter");
console.log("example 1");
let person={
    fName:"Ankith",
    lname:"Kumar",
    address:{
        pincode:123456,
    },
    eyecolor:"Blue",

};
let personCopy={...person};
person.eyecolor="Brown"
console.log("person",person);
console.log("personCopy",personCopy);

console.log("example 2");
let person2={
    fName:"Anki",
    lname:"S",

};
let address={
    pincode:123456,
};
//combine  2 objects by using spread operator
let personAdress={...person2,...address}
console.log("personAdress",personAdress)



///combine 2 arrays by using spread operator
console.log("example 3");
let ar1=[10,20,30]

let ar1Copy=[...ar1]
console.log("ar1Copy",ar1Copy )
let ar2=[1000,2000]
let ar12=[...ar1,...ar2]
console.log("ar12",ar12);