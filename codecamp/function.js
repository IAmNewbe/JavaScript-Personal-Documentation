function makeShoppingList(item1='milk', item2='bread', item3='eggs'){ //default parameters
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList('book','pen','table');
  makeShoppingList();

  const plantNeedsWater = (day) => { //arrow function
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  const plantNeedsWater1 = day => day === 'Wednesday' ? true : false; //refactor function


//Function As Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo(); 
console.log(isTwoPlusTwo.name);


// FUNCTION AS PARAMETERS
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  var checkA = val + 2;
  var checkB = func(val);
  if (checkA === checkB){
    return checkB;
  }else{
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 4));
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
      result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/
