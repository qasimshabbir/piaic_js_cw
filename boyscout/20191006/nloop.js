var aFirstName = ["Abdullah","Mohammad","Gulam"];
var aLastName = ["Khan","Ali","Raees"];
aFirstName.push("Kaleem","Saleem","Raheem");

for(var i=0; i<aFirstName.length;i++){
    for(var j=0;j<aLastName.length;j++){
        console.log(aFirstName[i]+" "+aLastName[j]);
    }
}