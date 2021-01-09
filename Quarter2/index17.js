var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var classes=[];

classes[days[0]] = "Blokchain";//classes["Sun"] = "Blockchain"
classes[days[1]] = "AI";
classes[days[3]] = "IOT";
classes["Sun"] = "Math";


console.log(classes);
var classes2 = [ 
                {"Sun":"Math"},
                {"Mon":"English"},
                {"Tue":"Social Studies"},
                ];
console.log(classes[days[0]]);
console.log(classes2);

var PIAIC = []
PIAIC.push(classes);
PIAIC.push(classes2);
console.log(PIAIC);
