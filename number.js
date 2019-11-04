
number2words(1555555300);
number2words(1555555505300);
number2words(1555300);
number2words(155501);

function number2words(number){
    var aOnes = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"
                ,"Eleven","Tewelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen"
                ,"Eigteen","Ninteen"];
    var aTens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninty"];
    var aUnits = ["","","","Hundred","Thousand","10 Thousand","3 Thousand","Million","10 Million"
                ,"3 Million","Billion","10 Billion","3 Billion","Trilion","10 Trilion","3 Trilion"
                ,"Quadrillion","10 Quadrillion","3 Quadrillion","Quantillion","10 Quantillion","3 Quantillion"
                ,"Hexillion","10 Hexillion","3 Hexillion"];
    
    var sNumber = number.toString();
    if(sNumber.length>0){
        if(number < 20){
            //for single digit numbers 
            console.log(aOnes[number.toString()]);
        }else{
            var aNumber = sNumber.split("");
            aNumber = aNumber.reverse();
            aWord = [];
            for(i=0;i<aNumber.length;i++){
                n = parseInt(aNumber[i]);
                console.log(n);
                if(n == 0 ) continue; //on 0 skip the loop
                if(i == 0){ //on first Digit eliminated 
                    aWord.push(aOnes[n]);//Digit
                    continue;
                }
                if(i==1){ //on 2nd Digit Tens eliminated
                    aWord.push(aTens[n]);
                    continue;
                }
                //begins the 100s and more
                scale = aUnits[i+1];
                if(scale.indexOf(" ")>=0){
                    a = scale.split(" ");
                    console.log(a);
                    //previous index correction
                    //previous unit slice for 10 and 100 scale
                    pSlice = aWord[aWord.length-1];
                    var b = false; //hold previous value if any;
                    if(pSlice.indexOf(a[1]) >= 0){
                        b = pSlice.split(" ");
                        if(a[0]!=3){
                            aWord.pop();//remove last element
                        }
                    }
                    console.log(pSlice);
                    if(n==1){ //checking for Ones till 19
                        scale = aOnes[a[0]]; //use Ones
                        if(b){
                            //getting complete teen numbers
                            n1 = n+aNumber[i-1];
                            scale = aOnes[n1]+" "+a[1];
                        }
                    }else if(a[0] == 10){ //chekcing for tens till ninty
                        scale = aTens[n]; //use tens
                        if(b){
                            scale = scale+" "+b[0]+" "+a[1];
                        }
                    }else if(a[0] == 3){ //checking for 100s and more
                        scale = aUnits[a[0]]; //use scale
                        if(b){
                            scale = aOnes[n]+" "+scale
                        }
                    }   
                    console.log(scale);
                    sWord = scale;
                }else{
                    sWord = aOnes[n]+" "+scale;
                }
                aWord.push(sWord);
            }
            console.log(aWord);
        }
    }
    var number2Word = aWord.reverse().join(" ");
    console.log(number2Word);
}
//console.log(sWord)