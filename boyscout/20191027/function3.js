
console.log("Before myFunc "+a);
myFunc(a);


var a = 5;

console.log("After myFunc");
console.log(a);
function myFunc(a,b,c){
    console.log("In myFunc");
    console.log(a1);
}


/*

function getAvg(score1,score2,score3){
    var avg = (score1 + score2 + score3)/3;
    return avg;
}
function showGrade(avg){
    if(avg >80){
        console.log("Grade A");
    }else if(avg > 70){
        console.log("Grade B");
    }else if(avg > 60){
        console.log("Grade C");
    }else{
        console.log("Fail");
    }
}

function findGrade(sc1,sc2,sc3){
    var avg = getAvg(sc1,sc2,sc3);
    console.log(avg);
    showGrade(avg);

} 
findGrade(90,85,70);
console.log(getAvg(80,65,70));
showGrade(68);
*/