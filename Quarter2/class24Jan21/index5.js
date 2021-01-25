var a = 4; //global

function doSomething(){
   var b = a*2; //local scope
   a = b;
   return b;
}


var b = doSomething();
console.log(a); //4 //8
console.log(b); //undefined