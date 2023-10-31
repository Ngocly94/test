//Ex1
const firstName = 'Ngọc';// 1
const lastName = 'Lê';
const country = 'Viêt Nam';
const city = 'Hà Nội';
const age = 29;
const isMarried = true;
const today = new Date;
console.log('Type of firstName',typeof firstName);
console.log('Type of lastName',typeof lastName);
console.log('Type of country',typeof country);
console.log('Type of city',typeof city);
console.log('Type of age',typeof age);
console.log('Type of isMarried',typeof isMarried);
console.log('Type of year',typeof today);

console.log(4 > 3 && 10 < 12);//6 True
console.log(4 > 3 && 10 > 12);//False
console.log(4 > 3 || 10 < 12);//True
console.log(4 > 3 || 10 > 12);//True
console.log(!(4 > 3));//False
console.log(!(4 < 3));//True
console.log(!(false));//True
console.log(!(4 > 3 && 10 < 12));//False
console.log(!(4 > 3 && 10 > 12));//True
console.log(!(4 === '4'));//True
//There is no 'on' in both dragon and python

var day_1 = new Date;//7
console.log(day_1.getFullYear()); // What is the year today?
console.log(day_1.getMonth());// What is the month today as a number?
console.log(day_1.getDate());// What is the date today?
console.log(day_1.getDay());// What is the day today as a number?
console.log(day_1.getHours());// What is the hours now?
console.log(day_1.getMinutes());// What is the minutes now?
console.log(day_1.getTime());// Find out the numbers of seconds elapsed from January 1, 1970 to now.

//Ex2
// B1
// let base = parseInt(prompt('Enter base')) ; 
// let height = parseInt(prompt('Enter height'));
// console.log('The area of the triangle is', base*height/2);


//B10
const myName = 'Lê';
const nameLength= myName.length;
nameLength>7 ? console.log("Lớn hơn 7") : console.log("Nhỏ hơn 7");

//15
var date = new Date();

// format date javascript
function dateFormater(date, separator) {
  var day = date.getDate();
  // add +1 to month because getMonth() returns month from 0 to 11
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // show date and month in two digits
  // if month is less than 10, add a 0 before it
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  // now we have day, month and year
  // use the separator to join them
  return day + separator + month + separator + year + hours + minutes;
}

console.log(dateFormater(date, '/'), hours);



