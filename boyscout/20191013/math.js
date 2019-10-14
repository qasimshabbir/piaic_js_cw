var number= 253.3232;
console.log(number);
console.log("Round "+Math.round(number)); // 254
console.log("Floor "+Math.floor(number));
console.log("Ceil  "+Math.ceil(number));

//RANDOM dice game

console.log(Math.floor(Math.random()*6+1));

//Balloting for PrizeBond
//Prizez bond 100 - 0-99
console.log(Math.floor(Math.random()*99));
console.log(Math.floor(Math.random()*99999+10000));
//ParseInt
var sNumber = "2223.323";
console.log("Integer "+parseInt(sNumber)); //2223
console.log("Float "+parseFloat(sNumber));//2223.323
console.log("Number "+Number(sNumber));

//toFixed

var rate = 20.25;
var Qty = 12.251;
var total = Qty * rate;
console.log("Total : PKR"+total.toFixed(2));


