function getAvg(score1,score2,score3){
    var avg1 = (score1 + score2 + score3)/3;
    return avg1;
}
function showGrade(avgScore){
    if(avgScore >80){
        console.log("Grade A");
    }else if(avgScore > 70){
        console.log("Grade B");
    }else if(avgScore > 60){
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
