verifyPassword("0A22ksd2123 ");
//verifyPassword("abc");
//verifyPassword("2A22ksd2a");
function verifyPassword(sPassword){
    console.log(sPassword);
    var condition= [];
    var sCond = ["Length","Start with Char","Contain Number","Contain Chars"];
    //Length
    if(sPassword.length > 8){
        condition[0] = true;
    }
    //1st Char is non numeric
    if(parseInt(sPassword.charAt(0))){
        condition[1] = false;
    }else{
        condition[1] = true;
    }
    //A22ksd2tt
    for(var i = 1; i<sPassword.length;i++){
        if(parseInt(sPassword.charAt(i))){
            condition[2]=true;
        }else{
            condition[3] = true;
        }
    }
    for(var i=0;i<condition.length;i++){
        if(condition[i]){
            console.log(sCond[i]+" Condition Match");
        }else{
            console.log(sCond[i]+" Condition Not Matched")
        }
    }
}