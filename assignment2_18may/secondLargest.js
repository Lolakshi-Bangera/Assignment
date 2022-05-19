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
  
  function secondlargest(a) {
    console.log(`The second largest number in  array list is ${a[a.length - 2]}`);
  }
  
  sort(secondlargest, [34, 56, 89, 23, 56, 78]);
  
  //2.Anonymos function
  
  var srt = function (callBack, arr) {
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
  };
  
  function secondlargest(a) {
    console.log(`The second largest number in  array list is ${a[a.length - 2]}`);
  }
  
  srt(secondlargest, [34, 56, 89, 23, 56, 78]);
  
  //3. IIFE
  
  (function (callBack, arr) {
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
  })(bsecondlargest, [34, 56, 89, 23, 56, 78]);
  
  function bsecondlargest(a) {
    console.log(`The second largest number in  array list is ${a[a.length - 2]}`);
  }
  
  //4. arrow function
  
  var srt = (callBack, arr) => {
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
  };
  
  function secondlargest(a) {
    console.log(`The second largest number in  array list is ${a[a.length - 2]}`);
  }
  
  srt(secondlargest, [34, 56, 89, 23, 56, 78]);
  