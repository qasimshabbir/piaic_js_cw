
var a = prompt("Give today's day number: ");

switch(a){
    case 'sun':
    case 'sat':    
        console.log("1  case : Its Holiday");
        break;
    case 'tue':
        console.log("2 case : Its Boring Day");
        break;
    case 'wed':
        console.log("3 case: Its Tough Day");
        break;
    default:
        console.log("default case: Its working day");
        
}

