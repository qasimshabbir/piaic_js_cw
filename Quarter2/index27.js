var a = -5.5;
console.log(a);
console.log("Round : "+Math.round(a));
console.log("Ceil : "+Math.ceil(a));
console.log("Floor: "+Math.floor(a));
var b = 5.5;
console.log(b);
console.log("Round : "+Math.round(b));
console.log("Ceil : "+Math.ceil(b));
console.log("Floor: "+Math.floor(b));

//2.6 => 3 -- 2.3 => 2
//round .5 >= +1  .5<integer eliminate decimal
//ceil  2.3 => 3 - 2.1 => 3 - 2.0 => 2
//floor 2.5 => 2 - 2.3 => 2