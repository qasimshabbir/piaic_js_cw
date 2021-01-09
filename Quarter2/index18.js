var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
console.log(days.length);
var today = "Wed";

for(var i=0;i<days.length;i++){ //7
    //i = 0//1
    if(days[i] === today){ 
        //0 => Sun === Wed = false
        //1 => Mon === Wed = false
        //2 => Tue === Wed = false
        //3 => Wed === Wed = True
        console.log("Welcome in Class"+ " Index = "+i);
        break; 
    }
    //console.log(days[i]);
}; //counter loop
console.log(i);