//
//
//
var a = [];
a.push(23);
a.push(56);
a.push(123);
a.push(78);
a.push(13);
a.push(45);
/*
for (var i=0; i<a.length ; i++){
    console.log(a[i]);
}
*/
for (var i=0; i<a.length ; i++){
    if(a[i]==1){
        console.log("Found "+a[i]);
        break;
    }
    else{
        console.log("Not found "+a[i]);
    }
}



