console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100)); //bilangan bulat
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8)); //find greatest integer from round number
console.log(Number.isInteger(2017)); //check if number is an integer
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
const entree = 'Enchiladas'; //can't reassign/uneditable var
console.log(entree);

var myName = 'Hikam';
var myCity = 'Banyuwangi';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`); //interpolate string

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

var greeting = function() {
    console.log('Hello World!');  
  };

  const greeting = () => console.log('Hello World'); //Arrow function