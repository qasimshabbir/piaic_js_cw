//number= 26.3546 - 26
var avg = 26.7646;
console.log("Number "+avg);
console.log("Round "+Math.round(avg));
console.log("Floor "+Math.floor(avg));
console.log("Ceil "+Math.ceil(avg));

//dice game
var random = Math.random();
var dice = (random*6);
console.log(random);
console.log(Math.ceil(dice));

//parseInt and Float
var strNumber = "234.23423";
var number = Number(strNumber);
//console.log("Integer "+parseInt(strNumber));//234
//console.log("Float "+parseFloat(strNumber));//234.23423
console.log("Number "+number);//234.23423
console.log("Two digit decimal "+number.toFixed(2));
