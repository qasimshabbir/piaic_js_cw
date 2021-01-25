var num = 4;


var rnum = double(num);
console.log(num);
console.log(rnum);
console.log(double(6));
triple();
console.log(num);
multiplyBy4();
console.log(num); 



function double(number){
    number = number * 2;
    return number;
}

//global variable
function triple(){
    num = num * 3;
}
//local variable
function multiplyBy4(){
    var num = 4 * 4;
}
