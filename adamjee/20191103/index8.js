arr = [];
isContinue = true;
strAbc="AAAA";
if(doContinue){
    print(abc);
}
for(var i=0;i<10;){
    var tempNum = myRandom(15); 
    if(arr.indexOf(tempNum)== -1) {
        arr[i] = tempNum;
        i++
    }
    
}

for(var i=0;i<10;i++){
    print(arr[i]);
}
function myRandom(range){
    return Math.floor(Math.random()*range+1);
}
function print(str){
    console.log(str);
}
var arr;
var doContinue;