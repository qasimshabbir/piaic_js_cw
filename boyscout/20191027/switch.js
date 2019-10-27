//op + - X /
function calc(a,b,op){
    
    var result = 0;
    switch(op){
        case "+":
            console.log("Add");
            result = a+b;
            break;

        case "-":
            console.log("Subtract");
            result = a-b;
            break;
        case "X":
            console.log("Multiply");
            result = a*b;
            break;
        case "/":
            console.log("Divide");
            result = a/b;
            break;
        default:
            console.log("No operation matched");
            result = -1;
    }
    return result;

}
console.log(calc(10,20,"/")); //0.5
console.log(calc(10,20,"-")); //10
console.log(calc(10,20,"*"));

