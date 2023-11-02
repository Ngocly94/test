// Ex1
const challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
const challenge_1 = challenge.toUpperCase();
console.log(challenge_1);
const challenge_2 = challenge.toLowerCase();
console.log(challenge_2);
const challenge_3 = challenge.substring(0,2);
console.log(challenge_3);
console.log(challenge.includes('Script'));
const a = '30 Days Of';
console.log(a.concat (' JavaScript'));

//Ex 2
const num = Math.floor(Math.random () * (100-50 +1)+ 50);// creates random number between 50 and 100
console.log(num)
const num_1 = Math.floor(Math.random()*100)+1;// creates random number between 0 and 100
console.log(num_1);
const string = 'You cannot end a sentence with because because because is a conjunction'//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string.substring(31,54))

//Ex 3
const string_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const string_2 = 'love'
console.log(string_1.split(string_2).length-1) //Count 'love'



const string_3 = 'You cannot end a sentence with because because because is a conjunction';
const string_4 = /because/gi;
const string_5 = string_3.match(string_4)
console.log(string_5); // Print 'beacause'

s
const string_6 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
