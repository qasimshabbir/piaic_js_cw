var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var now = new Date();

var myDate = new Date("01/10/2019");
console.log(Days[myDate.getDay()]);
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getTime() / (1000 * 60 * 60 *24));
myDate.setFullYear(2008);
console.log(Days[myDate.getDay()]);
console.log(myDate.getFullYear());