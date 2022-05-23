// area = (base * height) / 2
// Example 1: Area When Base and Height is Known

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
    `The area of the triangle is ${areaValue}`
);


// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))
// Example 2: Area When All Sides are Known
// // JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue2 = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
    `The area of the triangle is ${areaValue2}`
);