var cities = ["karachi","Lahore","Islambad","Peshawar","Gujranwala","Faislabad"];

var city = prompt("Enter City: ").toLowerCase();
//city = city.toLowerCase();
//available in cities or not
//for loop City==cities[index];
//indexOf position/index -1
var index = cities.indexOf(city);
if(index >= 0){
    alert("City is available at "+index);
}else{
    alert("City is not available");
}