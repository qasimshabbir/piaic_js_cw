var times =  148;
var timesStart = 2
var timesLimit = 10
// 2 x 1 = 2 => 10;
for(var j = timesStart;j<=timesLimit;j++){
    var times = j;
    for(var i = 1; i<=10;i++){
        console.log(times+ " x "+i+" = "+(i*times));
    }
}
