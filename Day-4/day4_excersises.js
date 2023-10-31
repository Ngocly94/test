//EX1:
//1+2
let yourAge = prompt('Enter your age');
yourAge>=18 ? console.log('You are old enough to drive.') : console.log(`You are left with ${18-yourAge} years to drive.
`);

let myAge = prompt('Enter my age') 
if(myAge>yourAge){
    console.log('My age is older than your age')
}
else if ( myAge<yourAge) {
    console.log('My age is elder than your age')
} else {
    console.log('We are the same age')
 };

 //3

 const a = 10;
 const b = 11;
 // Way 1
 if(a>b){
   console.log("a is greater than b");
 }
 else{
    console.log("a is less than b");
 };
 // Way 2
 a>b ? console.log("a is greater than b"): console.log("a is less than b");

 //4

 if(a%2==0){
    console.log(`${a} is even`)
 }
else{
    console.log(`${a} is odd`);
};
if(b%2==0){
    console.log(`${b} is even`)
 }
else{
    console.log(`${b} is odd`);
}

//EX2

//1
let score = 50;
switch(score){
    case score>=80 && score<=100:
        console.log('A')
        break
    case score>=70 && score<=79 :
        console.log('B')
        break
    case score>=60 && score<=69 :
        console.log('C')
        break
    case score>=50 && score<=59 :
        console.log('D')
        break
    case score>=0 && score<=49 :
        console.log('F')
        break
    default:
        console.log('Undefined')
};
//3
let dayInput = prompt('Input day');
let today = dayInput.toLowerCase();
switch (today) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log(`${today} is working day`)
      break
    case 'saturday':
    case 'sunday':
      console.log(`${today} is weekend`)
      break
    default:
      console.log('Undefined')
  };


//Ex3
//1
const get_day_of_month = (year, month) => {
    return new Date(year, month, 0).getDate();
};
let year_1 = prompt('Input year');
let month_1 = prompt('Input month');
let totalDaysOfMonth = get_day_of_month(year_1, month_1);
console.log(totalDaysOfMonth);


//2
let inputMonth = prompt('Input month');
let inputYear = prompt('Input year');
let inputMonth_1 = inputMonth.toLowerCase();
switch(inputMonth_1){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
    console.log(`${inputMonth_1} has 31 days`);
    break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
    console.log(`${inputMonth_1} has 30 days`);
    break
    case 'february':
    if(inputYear%4 == 0 && inputYear%100 !=0){
        console.log(`${inputMonth_1} has 29 days`)
    }
    else {
        console.log(`${inputMonth_1} has 89 days`)
    }
    break
    default:
        console.log(`undefined`)
}