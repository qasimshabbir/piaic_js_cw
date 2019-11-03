var arr = [];
for(var i = 0; i<10; i++){
    var duplicate =false;
    var ran=Math.floor(Math.random()*10+1);
    console.log("Ran "+ran+" I = "+i);
    for(var j = 0; j<arr.length;j++){
        if(arr[j]==ran){
           duplicate = true;
           i--;
           break;
        }  
    }
    if(!duplicate){  
      arr[i]=ran;
    }
    }
console.log(arr);