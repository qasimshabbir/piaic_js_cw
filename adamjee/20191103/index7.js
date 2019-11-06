var arr = [];
var doContinue = true;

for(var i=0;i<10;i++){
    var tempNum = Math.floor(Math.random()*10+1);
    if(arr.indexOf(tempNum)>-1){
        i--;
        continue;
    }
    arr[i] = tempNum;
}


for(var i=0;i<10;i++){
    console.log(arr[i]);
}

