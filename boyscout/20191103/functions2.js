function userInput(){
    var input = parseInt(prompt("Enter your score"));
    return input;
}

function calculateGrade(score){
    if(score>80 && score<=100){
        console.log("Grade A");
    }
    else if(score>70 && score<=80){
        console.log("Grade B");
    }
    else if(score>60 && score<=70){
        console.log("Grade C");
    }
    else {
        console.log("Failed");
    }
}

var input1 = userInput();
calculateGrade(input1);

calculateGrade(userInput());