//&& -- false short circut operator
//!! -- true 
var a = 72;
var gradA1 = a>80; //f
var gradA = a<80 && a>70 //t && t;
var gradB = a<70 && a>60 //f 

console.log(gradA1); //false
console.log(gradA); //true
console.log(gradB); //false
