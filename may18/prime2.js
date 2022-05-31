//program to check if a number is prime or not

//anonymous function

var number = parseInt(prompt("Enter a positive number: "));
var isPrime = true;


var isPrimeOrNot=function(number) {
    if (number === 1) {
        return alert("1 is neither prime nor composite number.");
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false
                return alert(`${number} is a not prime number`);
            }
        }
        return alert(`${number} is a prime number`);
    }
    else {
        return alert("invaid input.");
    }
}

isPrimeOrNot(number);