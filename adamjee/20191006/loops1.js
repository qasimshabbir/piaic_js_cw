var table = 2;
// for(initialization; condition; expression)
for(var times = 1;times<=20;times++){
    console.log(table+" x "+times+" = "+ table*times);
}

var myCity = prompt("Your City ");
var myArray = ["Karachi", "Lahore", "Sialkot", "Islamabad","Faislabad","Gujranwala"];
var notFound = true;
for(var index = 0;index<myArray.length;index++){
    if(myArray[index]==myCity){
       alert("Found my city "+myArray[index]);
       notFound = false;
       break;
    }
}
if(notFound){
    alert("Not Found");
}
