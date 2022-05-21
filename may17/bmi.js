//parameters
var weight = 45;
var height = 1.6;
var bmi = weight / (height * height);

//print bmi
console.log(bmi);


//program using ternary
bmi < 15 ? console.log("starvation") : bmi < 18.5 ? console.log("underweight") : bmi < 24.9 ? console.log("Healthy")
 : bmi < 29.9 ? console.log(" overweight"): console.log("obese")

//program using if-else
if (bmi<15) {
    console.log("starvation")
}
else if(bmi < 18.5){
    console.log("underweight") 
}
 else if( bmi < 24.9){
    console.log("healthy") 
}
 else if( bmi < 29.9){
    console.log("overweight") 
}
else
{
    console.log("obese")
}