//string to Uper and Lower case function
/*
var myCity = prompt("Your City:");
var myArray = ["Karachi", "Lahore", "Sialkot", "Islamabad","Faislabad","Gujranwala"];
var isFound = false;
for(var index = 0;index<myArray.length;index++){
    if(myArray[index].toLowerCase()==myCity.toLowerCase()){
       console.log("Found my city "+myArray[index]);
       isFound = true;
       break;
    }
}
if(!isFound){
    console.log("Not Found");
}
*/
// slice for string
var myCity = "Karachi";
//            0123456
var cityCode = myCity.slice(0,1)+myCity.slice(5);
console.log("My City is: "+myCity+" Code is "+cityCode.toUpperCase());

// length function
/*
var month = prompt("Enter Month");
if(month.length > 3){
    console.log(month.slice(0,3).toUpperCase());
}else{
    console.log(month.toUpperCase());
}
*/
//indexOf
var text = "The great war of words";
//          012345678910  
var searchText = "war";
console.log(text);
var startFrom = text.indexOf(searchText);
var textPart1 = text.slice(0,startFrom);
console.log(textPart1);
var replaceWith = "peace";
var textPart2 = text.slice(13);//startFrom+searchText.length
console.log(textPart2);
var replacedText = textPart1+replaceWith+textPart2;
console.log(replacedText);

