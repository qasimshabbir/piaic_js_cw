/*
var text = "to be their fellow not to be freind";
console.log(text);
console.log(text.replace(/be/g,"been"));
*/
var text = "To be or not to be working yes be not be";
var searchText = prompt('value');
var textIndex = -1;
var counter = 0;
for(var a = 0 ; a < text.length; a++){
    textIndex = text.indexOf(searchText, textIndex+1);
    if(textIndex >= 0) {
        counter++;
    }else{
        break;
    }
    console.log("Index = "+textIndex);
}
if(counter==0){
    console.log("Not found");
}else{
    console.log("counter = "+counter);
}