//bubble sort using four ways of function

var arr=[5,3,9,6,1,2];
var n=arr.length;
bubbleSort(arr)


function bubbleSort(arr){
for(var i=0;i<n-1;i++){
    for(var j=0;j<n-i-1;j++){
        if(arr[j]>arr[i]){
            var temp=arr[j]
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
return console.log(arr);
}
