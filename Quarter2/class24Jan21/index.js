var today = new Date();
console.log(today);
var day = ['sun','mon','tue','wed','thu','fri','sat'];
console.log(day[today.getDay()]);
console.log(today.getTime());
console.log(today.getTime()/(24*60*60*1000)); //1 days

var birthday = new Date('Jan 24, 1985 13:40:20');
console.log(day[birthday.getDay()]);
console.log(birthday);