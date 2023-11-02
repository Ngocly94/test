//EX1

//1
const emptyArray = Array();
console.log(emptyArray);
//2
const array5Elements = [1,2,3,4,5];
//3
console.log(array5Elements.length);
//4
console.log(array5Elements[0]);//Lấy phần tử đầu tiên
console.log(array5Elements[2]);//Lấy phần tử ở giữa
console.log(array5Elements[4]);//Lấy phần tử cuối cùng
//5
let mixedDataTypes= [2,3,4,5,6];
mixedDataTypes.unshift('Ngọc');
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

//6 + 7 + 8 + 9
 let itCompanies = Array();
 itCompanies[0]='Facebook';
 itCompanies[1]='Google';
 itCompanies[2]='Microsoft';
 itCompanies[3]='Apple';
 itCompanies[4]='IBM';
 itCompanies[5]='Oracle';
 itCompanies[6]='Amazon';
 console.log(itCompanies);
 console.log(itCompanies.length);
 console.log(itCompanies[0]);
 console.log(itCompanies[3]);
 console.log(itCompanies[6]);

//12
let itCompaniesString = itCompanies.join(', ').toString().concat(' are big IT company');
console.log(itCompaniesString);

//13
if (itCompanies.includes('Microsoft')){
    console.log(itCompanies[2])
}
else{
    console.log('not found')
};

// 15
//console.log(itCompanies.sort());

//16
//console.log(itCompanies.reverse());

//17
let itCompanies_First_3 = itCompanies.slice(0,3);
console.log(itCompanies_First_3);
//18
let itCompanies_Last_3 = itCompanies.slice(4,7);
console.log(itCompanies_Last_3);

//19

//20
console.log(`Remove the first company ${itCompanies.shift()}`);
//21
const middleIndexCompany = itCompanies[Math.floor(itCompanies.length / 2)]//Remove giá trị ở giữa
console.log(`Công ty ở giữa ${middleIndexCompany}`);
itCompanies = itCompanies.filter(v => v !== middleIndexCompany); 
console.log(itCompanies);

//22
console.log(`Remove the last company ${itCompanies.pop()}`);
//23

console.log(`Remove all company${itCompanies.splice()}`);


//Ex2

//2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'; // Chia string thành array
let textToArray = text.split(" ");
console.log(textToArray);
console.log(textToArray.length); //Đếm array

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']; //Thêm Meat
if(shoppingCart.includes('Meat')){
    console.log('Đã có meat')
}
else{
    shoppingCart.unshift('Meat')
};
console.log(shoppingCart);

if(shoppingCart.includes('Sugar')){ // Thêm sugar
    console.log('Đã có sugar')
}
else{
    shoppingCart.push('Sugar')
};
console.log(shoppingCart);

let allergicHoney = true;// Dị ứng mật ong
if(allergicHoney){
   shoppingCart.splice(3,2,'Tea')
}
else{
    console.log('Không loại mật ong')
};
console.log(shoppingCart);


shoppingCart[3]='Green tea';
console.log(shoppingCart);

// 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  if(countries.includes('Ethiopia')){
    console.log(countries[4].toUpperCase())
  }
else{
    countries.push('Ethiopia')
};
// 5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
  }
  else{
    webTechs.unshift('Sass')
    console.log(webTechs)
  };
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

// Ex3

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAge = ages.sort();
console.log(sortAge);
const maxAge = sortAge[9];
const minAge = sortAge[0];
console.log(maxAge);// Lấy tuổi cao nhất
console.log(minAge);// Lấy tuổi thấp nhất

const ageAverage = Math.round([sortAge[0]+sortAge[1]+sortAge[2]+sortAge[3]+sortAge[4]+sortAge[5]+sortAge[6]+sortAge[7]+sortAge[8]+sortAge[9]]/sortAge.length);
console.log(ageAverage);// Lấy tuổi TB

const absMin = Math.abs(minAge-ageAverage);
const absMax = Math.abs(maxAge-ageAverage);
const compareMinMax = absMin-absMax
compareMinMax < 0 ? console.log(absMin<absMax) : console.log(absMin>absMax);

// 2
const middleIndex = countries[Math.floor(countries.length / 2)];
console.log(middleIndex);

// 3

