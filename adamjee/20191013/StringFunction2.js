//last index of
var text = "To be or not to be";
console.log("Indexof "+text.indexOf("be"));
console.log("Indexof "+text.lastIndexOf("be"));

//charAt
var city = "karachi";
console.log("First Chars "+city.charAt(0));
console.log("Last Chars "+city.charAt(city.length-1));

//replace
var text = "To be or not to be";
console.log(text);
console.log(text.replace("be","been"));
console.log(text.replace(/be/g,"been"));