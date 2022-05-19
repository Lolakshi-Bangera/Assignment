//1. named function

function fibo(callback,range){
    var a=0;
    var b=1;
    var c=0;
    var d=new Array()
    
    for(var i=0;i<range;i++){
        d[i]=a ;
    c=a+b;
    a=b;
    b=c
    }
    
    callback(d)
    }
    
    function result(d){
        console.log(d);
    }
    fibo(result,10);
    
    //2. anonymous functions
    
    var fibo=function(callback,range){
        var a=0;
        var b=1;
        var c=0;
        var d=new Array()
        
        for(var i=0;i<range;i++){
            d[i]=a ;
        c=a+b;
        a=b;
        b=c
        }
        
        callback(d)
        }
        
        var result=function (d){
            console.log(d);
        }
        fibo(result,10);
    
        //3.IIFE
        (
            function(callback,range){
                var a=0;
                var b=1;
                var c=0;
                var d=new Array()
                
                for(var i=0;i<range;i++){
                    d[i]=a ;
                c=a+b;
                a=b;
                b=c
                }
                
                callback(d)
                })(result,10);
                
                (function (d){
                    console.log(d);
                })
                
            
    
        // 4.arrow Function
        var fibo=(callback,range)=>{
            var a=0;
            var b=1;
            var c=0;
            var d=new Array()
            
            for(var i=0;i<range;i++){
                d[i]=a ;
            c=a+b;
            a=b;
            b=c
            }
            
            callback(d)
            }
            
            var result=(d)=>{
                console.log(d);
            }
            fibo(result,10);
    
        