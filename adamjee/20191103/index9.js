print(numToWords(5));
print(numToWords(19));
print(numToWords(20));
print(numToWords(30));
print(numToWords(31));//Thirty One;
print(numToWords(99));//Thirty One;
print(numToWords(110));//Thirty One;
print(numToWords(1110))
print(numToWords(11110))
///              01
function numToWords(iNumber){
    var ones = ["","One","Two","Three","Four","Five",
                "Six","Seven","Eight","Nine","Ten","Eleven",
                "Twelve","Thirteen","Forteen","Fiften","Sixteen","Seventeen",
                "Eighten","Ninteen"];
    var tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninty"];

    if(iNumber < 20){
        return ones[iNumber];
    }else if(iNumber < 100){
        var tensIndex = getNumberIndex(iNumber,0)
        var onesIndex = getNumberIndex(iNumber,1)
        return tens[tensIndex]+" "+ones[onesIndex];
    }else{
        return "Not Found";
    }
}
function print(str){
    console.log(str);
}
function getNumberIndex(iNumber,i){
    //99
    var sNumber = iNumber.toString();
    //"99"
    return parseInt(sNumber.charAt(i));
}
