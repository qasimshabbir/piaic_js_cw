
function tellTime(aDate){
    //now = Jun 19 2018
    //now = Jun 19 1978
    //var now = aDate;
    var hr = aDate.getHours();
    var min = aDate.getMinutes();
    alert('Current time: HR: '+hr+" Min:"+min);
}


var newDate = new Date('Jun 19, 2018');

tellTime(newDate); //1
tellTime(new Date('Jun 19, 1978 12:49:00'));
tellTime(new Date());


function greetMe(name){
    console.log("Hello "+name);
}

greetMe('Aiman');
greetMe('Rehan');
greetMe(prompt("Your name"));