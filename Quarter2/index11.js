//&& -- false short circut operator
//|| -- true
//Mango Apple = Fruit
//Potato Onion = Veg
//Rose Lilly = Flower
var item = prompt("Input your item"); 
var fruit = item === "mango" || item ==="apple"; //f
var veg = item === "potato" || item === "onion";
var flower = item === "rose" || item === "lilly";

console.log(fruit); //false
console.log(veg); //true
console.log(flower); //false
