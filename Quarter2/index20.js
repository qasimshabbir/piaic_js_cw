var primeNumber = 99;
//console.log(primeNumber);
var isNotPrime = false;
for(var i=2;i<primeNumber;i++){
    //divisible by any lesser numbers
    if(primeNumber % i === 0 ){
        console.log(primeNumber+" is not a prime Number"+ " I "+i);
        isNotPrime = true;
        break;
    }
} 
if(isNotPrime===false){
    console.log("Its a prime number");
}
