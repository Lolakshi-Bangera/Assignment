//1. named function

function reverse1(string){
    var a="";
    for(var i=0;i<string.length;i++){
    var b=string.charAt(i);
    a=b+a;
    }
    return console.log(a);
}

reverse1("irreversible")


//2. anonymous function

var reverse2=function(string){
    var a="";
    for(var i=0;i<string.length;i++){
    var b=string.charAt(i);
    a=b+a;
    }
    return console.log(a);
}

reverse2("impossible");


//3. IIFE
(
    function(string){
        var a="";
        for(var i=0;i<string.length;i++){
        var b=string.charAt(i);
        a=b+a;
        }
        return console.log(a);
    }
    
    ("bangalore")

)

//4. arrow function

var reverse3=(string)=>{
    var a="";
    for(var i=0;i<string.length;i++){
    var b=string.charAt(i);
    a=b+a;
    }
    return console.log(a);
}

reverse3("forever");
