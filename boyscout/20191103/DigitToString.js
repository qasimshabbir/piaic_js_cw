var num = parseInt(prompt("Please enter number"));
var ones = ["","One","Two", "Three","Four","Five","Six","Seven","Eight","Nine"];
var ele = ["","Eleven","Twelve","Thriteen","Forteen","Fifteen","Sixteen","Seventeen","Eighteen","Ninteen"];
var tens = ["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Sevnty","Eighty","Ninty"];

var val = "";
if(num < 10){
    val = ones[num];
}
if(num >=11 && num <=19){
    val = ele[num%10];
}
if (num==10 || num >=20) {
    var div = Math.floor(num/10);
    var mod = num%10;
    console.log("div = "+div);
    console.log("mod = "+mod);
    val = tens[div] + " "+ones[mod];
}


console.log("Num = "+num);
console.log("Text = "+val);



