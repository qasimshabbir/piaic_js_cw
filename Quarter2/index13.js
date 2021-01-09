var age = prompt("Your age: ");
//age = Number(age); //convert string number;
var assignClass ="No Class";
if(age>18){ 
    var isAdult = true;
    assignClass = "BCC";
    alert("Adult"); //true
}else{
    var isAdult = false;
    alert("Not Adult"); //false
}
console.log(isAdult);
console.log(assignClass);