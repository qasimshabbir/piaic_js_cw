//Stack
var a = [];
a.push(1); //0 //removed
a.push(2); //1
a.push(3); //2
a.push(4,5,6);
console.log(a);
//a.pop(); //last elemet remove 
//console.log(a);

//queue
//a.shift(); // remove first element
//console.log(a);
console.log("Unshift");
a.unshift(-1,-2,-3);
console.log(a);

console.log("Splice");
a.splice(3,0,0);
console.log(a);
a.splice(0,3,0,0.1,0.2);
console.log(a);
//a.splice(2,4);//
