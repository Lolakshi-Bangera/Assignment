var book={
    title:"Lion king",
    author:"LolMonk",
    price: 5000,
    pages:500,
    isAvailable:true,
    cover:function(){
        return book.title+"\n"+book.author
    }
}
console.log(book.cover());

var shoe={
    brand:"Mochi",
    gender:"Female",
    price: 2500,
    size:6,
    isAvailable:true,
    stamp:function(){
        return shoe.brand+"\n"+shoe.size
    }
}
console.log(shoe.stamp());

var food={
    foodName:"Grilled Chicken",
    price:250,
    quantity:2,
    deliveryCharge:45,
    isCulterySent:false,
    grandTotal:function()
    {
        return (food.price*food.quantity)+food.deliveryCharge
    }
}
console.log(food.grandTotal());

var account={
    firstName:"Lolakshi",
    lastName:"Bangera",
    accountNumber:1001,
    ifscCode:"CN00123",
    balance:10000,
    withdrawal:500,
    printBalance:function () {
        return account.balance-account.withdrawal
    }
}
console.log(account.printBalance())

//using new keyword
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