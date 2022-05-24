navigator.geolocation.getCurrentPosition((data)=>console.log(data.coords.latitude));
navigator.geolocation.getCurrentPosition((data)=>console.log(data));
    
console.log("location",location);
console.log("history",history);
console.log("navigator",navigator);