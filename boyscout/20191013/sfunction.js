var myCity = prompt("Your City ");
var aCities = ["karachi", "lahore","faisalabad","sialkot","gujranwala"];
var notFound=true;
for(var i=0;i<aCities.length;i++){
    if(aCities[i]==myCity.toLowerCase()){
        console.log("Found City "+aCities[i].toUpperCase());
        notFound = false;
        break;
    }
}
if(notFound){
    console.log("City not Found");
}