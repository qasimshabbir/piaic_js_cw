function throwDice(range){
    return parseInt((Math.random()*range)+1);    
}
var wining = throwDice(24);
var diceSum = throwDice(12)+throwDice(12);
console.log("Winning Number: "+wining);
console.log("Sum of Dice: "+diceSum);

if(diceSum == wining){
    console.log("Win");   
}else{
    console.log("Lose");
}
