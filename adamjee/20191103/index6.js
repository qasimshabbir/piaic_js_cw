var arr = [];
var doContinue = true;
while(doContinue){
    var isDuplicate = false;
    var tempNum = Math.floor(Math.random()*10+1);
    console.log("Num = "+tempNum);
    for(var j=0;j <arr.length;j++){
        if(arr[j] === tempNum){
            isDuplicate = true;
            break;
        }
    }
    if(isDuplicate){
        continue;
    }
    arr.push(tempNum);

    if(arr.length==10){
        break;
    }
    
}

for(var i=0;i<10;i++){
    console.log(arr[i]);
}

