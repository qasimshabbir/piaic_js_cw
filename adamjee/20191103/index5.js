var arr = [];

for(var i=0;i<10;i++){
    var isDuplicate = false;
    var tempNum = Math.floor(Math.random()*10+1);
    console.log("I = "+i +" Num = "+tempNum);
    for(var j=0;j <arr.length;j++){
        if(arr[j] === tempNum){
            isDuplicate = true;
            break;
        }
    }
    if(isDuplicate){
        i--;
        continue;
    }
    arr[i] = tempNum;
    
}

for(var i=0;i<10;i++){
    console.log(arr[i]);
}

