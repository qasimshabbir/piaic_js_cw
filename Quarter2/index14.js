var markObtained = prompt("Your total marks: "); ///aaa
markObtained = Number(markObtained);//1000 
if(!markObtained  || markObtained > 100 || markObtained<0){ //
    console.log("Wrong Value");
}else{
    var grade = "Fail";
    //nested if
    if(markObtained > 80){
        grade = "Grade A1";
    }else if(markObtained>70 && markObtained <= 80){
        grade = "Grade A";
    }else if(markObtained>60 && markObtained <= 70){
        grade = "Grade B";
    }
    console.log("You got "+grade);
}
