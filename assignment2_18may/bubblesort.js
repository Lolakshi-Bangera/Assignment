//1. named function

function sort(callBack, arr) {
  var a = arr;

  for (var i = 1; i < a.length; i++) {
    for (var j = 0; j < a.length - i; j++) {
      if (a[j] > a[j + 1]) {
        var t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
  callBack(a);
}

function bubblesort(a) {
  console.log(`The sorted array list ${a}`);
}

sort(bubblesort, [34, 56, 89, 23, 56, 78]);
 

//2.Anonymos function

var srt=function (callBack, arr) {
    var a = arr;
  
    for (var i = 1; i < a.length; i++) {
      for (var j = 0; j < a.length - i; j++) {
        if (a[j] > a[j + 1]) {
          var t = a[j];
          a[j] = a[j + 1];
          a[j + 1] = t;
        }
      }
    }
    callBack(a);
  }
  
  var bubblesort=function(a) {
    console.log(`The sorted array list ${a}`);
  }
  
  srt(bubblesort, [34, 56, 89, 23, 56, 78]);

  //3. IIFE

  (
    function (callBack, arr) {
        var a = arr;
      
        for (var i = 1; i < a.length; i++) {
          for (var j = 0; j < a.length - i; j++) {
            if (a[j] > a[j + 1]) {
              var t = a[j];
              a[j] = a[j + 1];
              a[j + 1] = t;
            }
          }
        }
        callBack(a);
      })(bubblesort, [34, 56, 89, 23, 56, 78]);
      
      (function bubblesort(a) {
        console.log(`The sorted array list ${a}`);
      })


//4. arrow function

var srt=(callBack, arr)=> {
    var a = arr;
  
    for (var i = 1; i < a.length; i++) {
      for (var j = 0; j < a.length - i; j++) {
        if (a[j] > a[j + 1]) {
          var t = a[j];
          a[j] = a[j + 1];
          a[j + 1] = t;
        }
      }
    }
    callBack(a);
  }
  
  var bubblesort=(a)=> {
    console.log(`The sorted array list ${a}`);
  }
  
  srt(bubblesort, [34, 56, 89, 23, 56, 78]);
  