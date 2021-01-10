//array duplicate value remove
var cities = ["Karachi","Lahore","Islambad","lahore","karachi"];

/*
1. Take another Clean array and push unique values into it
2. Remove duplicate element from array
3. indexOf()
//slice() splice()
Loop through array
Put current element into variable
Loop through array for rest of the element
compare two elements
if found dupicate?
    2) remove element from array 
-----------
    1)
    need a flag of isFound.. 
if isFound is false
  push element into clean array
 
*/
// Karachi =0 -- 1,2,3,4,5,6
/*
for(var i=0;i<cities.length;i++){
    for(var j=i+1;j<cities.length;j++){
        //console.log(cities[i]);
        //console.log(cities[j]);
        if(cities[i].toLowerCase()===cities[j].toLowerCase()){
            ///cities.slice(j,1);
            console.log(cities.splice(j,1));
        }
    }
}

console.log(cities);
var cleanCities=[];

for(var i=0;i<cities.length;i++){
    var noDuplicate = true;
    for(var j=i+1;j<cities.length;j++){
        if(cities[i].toLowerCase()===cities[j].toLowerCase()){
            ///cities.slice(j,1);
            noDuplicate = false;
            console.log(cities[j]);
            break;
        }
    }
    if(noDuplicate){
        cleanCities.push(cities[i]);
    }
}

console.log(cleanCities);

*/
console.log(cities);
//var duplicateIndex = cities.indexOf(cities[1].toLowerCase(),1);
//console.log(duplicateIndex)
for(var i=0; i<cities.length;i++){
    var duplicateIndex = cities.indexOf(cities[i].toLowerCase(),1);
    if(duplicateIndex !== -1){
        console.log(cities.splice(duplicateIndex,1)); 
    }
}
console.log(cities);