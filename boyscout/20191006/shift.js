var aCities = [];
var index=0;
aCities[index++] = "Rawalpindi";
aCities[index++] = "Karachi";
aCities[index++] = "Hyderabad";
aCities[index++] = "Larkhana";
aCities[index++] = "Lahore";
aCities[index++] = "Islambad";
aCities[index++] = "Gujranwala";
aCities[index++] = "Peshawar";
aCities[index++] = "Quetta";

console.log(aCities);
//aCities.splice(2,0,"Faislabad");
//console.log(aCities);
//aCities.splice(2,0,"Faislabad","Mirpurkhas");
//aCities.splice(2,2,"Faislabad");
//aCities.splice(2,2);
var sCities = aCities.slice(2,6);
console.log(sCities);
console.log(aCities);