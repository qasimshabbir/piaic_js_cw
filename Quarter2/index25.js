var cities = ["Karachi","Lahore","Islambad","Peshawar","Gujranwala","Faislabad"];

var city = prompt("Enter City: ").trim();

//karachi => Karachi 
//-- First Char Upper charAt
//-- Rest of the Char Lower 
//LAHORE => Lahore
city = city.charAt(0).toUpperCase()+city.slice(1).toLowerCase();
console.log(city);

var index = cities.indexOf(city);
if(index >= 0){
    alert("City is available at "+index);
}else{
    alert("City is not available");
    //add it
    cities.unshift(city);
    
}