//a.forEach()

//Example 1
state=["karnataka","goa","hariyana","kerala","dehi"]
state.forEach((element,index) => {
    console.log(`${index} state name:${element}`);
});
console.log("================================");
//Example 2
var books=[
    {
        title:"book1",
        price:50,
    },
    {
        title:"book2",
        price:500,
    },
    {
        title:"book3",
        price:5000,
    },
];
books.forEach((value,index)=>{
    {console.log(index);
        console.log(value.title);
        console.log(value.price);
    }
})
console.log("================================");
//Example 3
names=["kavya","Navya","Divya","Sathya","Mithya"]
names.forEach((element,index) => {
    console.log(`${index} name:${element}`);
});
console.log("================================");
//Example 4
animal=["cat","goat","sheep","dog","cow"]
animal.forEach((element,index) => {
    console.log(`${index} animal: ${element}`);
});
console.log("================================");
//Example 5
notes=[20,10,50,200,2000,]
notes.forEach((value,index) => {
    console.log(`${index} note value:${value}`);
});
console.log("================================");
console.log("================================");
//b.push()

//Example 1
var fruits2=["mango","banana","apple"]
console.log("fruits before push",fruits2);

var addFruit=fruits2.push("grapes","kiwi")
console.log("fruits after push",fruits2);
console.log(addFruit);
console.log("================================");

//Example 2
var phone=["samsung","moto","oneplus"]
console.log("phone before push",phone);

var addPhone=phone.push("iphone","redmi")
console.log("phones after push",phone);
console.log(addPhone);
console.log("================================");

//Example 3
var birds=["duck","cuckoo","sparrow"]
console.log("birds before push",birds);

var addBirds=birds.push("chicken","peacock")
console.log("Birds after push",birds);

console.log("================================");
//Example 4
var square=[1,"four",9,16]
console.log("Square before push",square);

square.push(25,36,49,64)
console.log("squares after push",square);

console.log("================================");

//Example 5
var country=["India"]
console.log("Country before push",country);
country.push("Shreelanka","Nepal","Bangladesh","Pak")
console.log("Country after push",country);

console.log("================================");
console.log("================================");
//c.pop
//Example 1
var fruits3=["mango","banana","apple","watermelon"]
console.log("fruits before pop",fruits3);
var removeFruit=fruits3.pop()
console.log("fruits after pop",fruits3);
console.log(removeFruit);
console.log("================================");

//Example 2

var birds=["parrot","sparrow","eagle","swan"]
console.log("birds before pop",birds);
var removeBird=birds.pop()
console.log("birds after pop",birds);
console.log(removeBird);
console.log("================================");
//Example 3

var odd=[1,3,5,7]
console.log("numbers before pop",odd);
var removeOdd=odd.pop()
console.log("numbers after pop",odd);
console.log(removeOdd);
console.log("================================");
//Example 4

var galaxy=["world"]
console.log(" before pop",galaxy);
var remove=galaxy.pop()
console.log(" after pop",galaxy);
console.log(remove);
console.log("================================");
//Example 5

var boolean=[true,false,false,true]
console.log(" before pop",boolean);
var remove=boolean.pop()
console.log(" after pop",boolean);
console.log(remove);
console.log("================================");
console.log("================================");
//d.shift
//Example 1
var number=[0,1,1,2,3,5,8]
console.log("before shift",number);
var removeFirst=number.shift()
console.log("removeFirst",removeFirst);
console.log("after shift",number);

console.log("================================");


//Example 2

var region=['Asia','Europe','South Africa','North America','Australia']
console.log("before shift",region);
var remove=region.shift()
console.log("remove",remove);
console.log("after shift",region);

console.log("================================");


//Example 3
var number=[]
console.log("before shift",number);
var removeFirst=number.shift()
console.log("removeFirst",removeFirst);
console.log("after shift",number);

console.log("================================");

//Example 4
var neg=[-10,-1,1,-2,-3,-5,-8]
console.log("before shift",neg);
var removeFirst=neg.shift()
console.log("removeFirst",removeFirst);
console.log("after shift",neg);

console.log("================================");

//Example 5

var alphabet=['z','a','b','c','d','e']
console.log("before shift",alphabet);
var removeFirst=alphabet.shift()
console.log("removeFirst",removeFirst);
console.log("after shift",alphabet);

console.log("================================");
console.log("================================");
//e.unshift
//Example 1
var number=[10,20,30,40];
console.log("before unshift",number);
var addNum=number.unshift(60)
console.log("after unshft",number);
console.log(addNum);
console.log("================================");

//Example 2

var alphabet=['x','y','z'];
console.log("before unshift",alphabet);
var addNum=alphabet.unshift('a','b','c','till w')
console.log("after unshift",alphabet);
console.log(addNum);
console.log("================================");

//Example 3

var onoff=[true,false,true,false];
console.log("before unshift",onoff);
var addNum=onoff.unshift(true,true,false,false)
console.log("after unshift",onoff);
console.log(addNum);
console.log("================================");

//Example 4
var zero=[];
console.log("before unshift",zero);
zero.unshift(45,4500,454500)
console.log("after unshift",zero);

console.log("================================");


//Example 5
var onoff=[];
console.log("before unshift",onoff);
var addNum=onoff.unshift(true,true,false,false)
console.log("after unshift",onoff);
console.log(addNum);
console.log("================================");
console.log("================================");
//f.includes
//Example 1
var num=[10,20,30,40];
var hasThirty=num.includes(30)
console.log(hasThirty);
console.log("================================");

//Example 2
var num=[10,null,30,null];
var hasThirty=num.includes(null)
console.log(hasThirty);
console.log("================================");

//Example 3
var num=[10,null,30,null];
var hasThirty=num.includes(true)
console.log(hasThirty);
console.log("================================");

//Example 4
var num=['10','null','30','null'];
var hasThirty=num.includes(30)
console.log(hasThirty);
console.log("================================");

//Example 5
var num=['suma','pune','japan','maxwell'];
var hasThirty=num.includes("maxwell")
console.log(hasThirty);

console.log("================================");
console.log("================================");
//-----------------------------------------------------g.splice-----------------------------------------------
//Example 1
console.log("splice");
var number1=[10,20,30,40];
console.log("before splice",number1);
var remove=number1.splice(3)
console.log("after splice",number1);
console.log("remove",remove);

console.log("================================");

//Example 2
var number1=[10,20,true,true,40,false,"confidential"];
console.log("before splice",number1);
var remove=number1.splice(3,3)
console.log("after splice",number1);
console.log("remove",remove);

console.log("================================");

//Example 3
var animal=["lion","tiger","deer","rabbit"];
console.log("before splice",animal);
var remove=animal.splice(0,0,"elephant")
console.log("after splice",animal);
console.log("remove",remove);

console.log("================================");

//Example 4
var number5=[10,20,30,40];
console.log("before splice",number5);
var remove=number5.splice(0,3,60,80,"hello")
console.log("after splice",number5);
console.log("remove",remove);

console.log("================================");

//Example 5
var nothing=[10,20,30,40];
console.log("before splice",nothing);
var remove=nothing.splice(0)
console.log("after splice",nothing);
console.log("remove",remove);

console.log("================================");
console.log("================================");
//-------------------------------------------------------h.slice-----------------------------------------------
//Example 1
var num2=[1,2,3,4,5,6,7]
console.log("before slice",num2);
var sliceElements=num2.slice(0)
console.log("after slice",num2);
console.log("sliced elements",sliceElements);
console.log("================================");

//Example 2
var num2=[1,2,3,4,5,6,7]
console.log("before slice",num2);
var sliceElements=num2.slice(1,5)
console.log("after slice",num2);
console.log("sliced elements",sliceElements);
console.log("================================");
//Example 3
var num2=[1,2,3,4,5,6,7]
console.log("before slice",num2);
var sliceElements=num2.slice(2)
console.log("after slice",num2);
console.log("sliced elements",sliceElements);
console.log("================================");
//Example 4
var num2=[5,10,13,24,65,65,7]
console.log("before slice",num2);
var sliceElements=num2.slice(1,2)
console.log("after slice",num2);
console.log("sliced elements",sliceElements);
console.log("================================");
//Example 5
var cart = new Array("bottle",2, true, null,"1left",undefined,{ name:"titan"},"kiwi",1,3);
console.log("before slice",cart);
var sliceElements=cart.slice(3,8)
console.log("after slice",cart);
console.log("sliced elements",sliceElements);
console.log("================================");
console.log("================================");

//---------------------------------------------------------i.isArray-------------------------------------------
//Example 1
//Array.isArray to check if its an array or not => boolean
var fruits=["mango","banana","apple"]
console.log(Array.isArray(fruits))
console.log("================================");

//Example 2
var shoe ={
    brand: "Mochi",
    gender: "Female", 
    price: 2500,
    size: 6,
}

console.log(Array.isArray(shoe))
console.log("================================");
//Example 3
var cart = new Array("bottle",2, true, null,"1left",undefined,{ name:"titan"});
console.log(Array.isArray(cart))
console.log("================================");
//Example 4
var birds = ["kingfisher",90, true, null,"parrot",undefined,{ name:"pigeon"}];
console.log(Array.isArray(birds))
console.log("================================");
//Example 5
var shoes =new Object()
    shoes.brand="Mochi"
    shoes.gender="Female" 
    shoes.price= 2500
    shoes.size=6
    shoes.isAvailable=true
    console.log(Array.isArray(shoes))  
console.log("================================");
console.log("================================");