var a = 'banana';
console.log(a.slice(2,5));
console.log(a.indexOf("na")); //2
console.log(a.indexOf("na",3)); //4
console.log(a.charAt(3)); //a
console.log(a.replace('nana','tata'));//batata
console.log(a.split('a'));
console.log(a.concat(" is a best food"));


var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue|house|car/gi,"Hello" );
console.log(res);