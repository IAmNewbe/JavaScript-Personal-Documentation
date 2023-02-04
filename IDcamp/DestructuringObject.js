const profile = {
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
  };
   
  const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
   
  console.log(localFirstName);
  console.log(localLastName);
  console.log(localAge);
   
  /* Output:
  John
  Doe
  18
  */

//DESTRUCURING ARRAY
const student = ["ahmad", 19, "Electrical Engineering"];

const [, age] = student; 

console.log(age);

//SWAP VARIABLE USING array destructuring assignment
let a = 1;
let b= 2;
 
console.log('Sebelum swap');
console.log('Nilai a: ' + a);
console.log('Nilai b: ' + b);
 
[a, b] = [b, a]
 
console.log('Setelah swap');
console.log('Nilai a: ' + a);
console.log('Nilai b: ' + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

const [myFood, herFood = 'Salad'] = favorites; //SET Salad AS DEFAULT