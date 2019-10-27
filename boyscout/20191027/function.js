
function getAvg(){
    score1 = 30;
    score2 = 40;
    score3 = 60;
    
    avg = (score1 + score2 + score3)/3;
    alert(avg);
    
}

//getAvg();

function makeTea(amountOfSugar,addMilk){
    if(addMilk){
        console.log("Making Tea with "+amountOfSugar+ " spoons with Milk");
    }else{
        console.log("Making Tea with "+amountOfSugar+ " spoons without Milk");
    }
    return "Your tea";
}

console.log(makeTea(2,true));





/*
function sum(a,b){
    return a+b;
}

console.log("Sum of 2 and 4 is "+sum(2,4));
*/








