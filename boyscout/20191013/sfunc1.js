var fullName = "Abdul Rehman";
//              012345
var firstName = fullName.slice(2,5);
var lastName = fullName.slice(6);
console.log("First Name "+firstName);
//console.log("Last Name "+lastName);
//console.log("Total Count "+fullName.length);


var text = "to be their fellow not to be freind";
console.log(text);
var searchText = "be";
var replaceWith = "been";

var indexOf = text.indexOf(searchText,10);
console.log(indexOf);
var leftText = text.slice(0,indexOf);
console.log(leftText);
var rightText = text.slice(searchText.length+indexOf);
var replacedText = leftText+replaceWith+rightText;
console.log(replacedText);
