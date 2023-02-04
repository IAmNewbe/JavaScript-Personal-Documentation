const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.'); //add each element
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number; //return New Array
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number'; //
});

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  for (let i=0; i<animals.length; i++){
    return animals[i][0];
  }
  
})

//FUNCTION TO CREATE NEW ARRAY (.map)
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers/100;
})
console.log(smallNumbers);
// Create the smallNumbers array below
console.log(onlyNumbers);


//FILTER EACH ELEMENTS 
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smalllNumbers = randomNumbers.filter(randomNumber=> {
  if (randomNumber < 250){
    return true;
  }
});
// Call .filter() on randomNumbers below
console.log(smalllNumbers);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  if (favoriteWord.length > 7){
    return true;
  }
});
console.log(longFavoriteWords);


// FIND INDEX OF EACH ELEMENTS IN ARRAY 
const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
 const foundAnimal = animalss.findIndex(animal => {
   return animal === 'elephant';
 });
 console.log(foundAnimal);

 const startsWithS = animalss.findIndex(animal => {
   return animal[0] === 's';
 });
 console.log(startsWithS);


// .reduce method => return Single Value from an array
const newNumbers = [1, 3, 5, 7]; 

const newSum = newNumbers.reduce((accumulator,currentValue) => {
 console.log('The value of accumulator: ', accumulator);
 console.log('The value of currentValue: ', currentValue);
 return accumulator + currentValue;
},10)

console.log(newSum);

//iterator documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below

console.log(words.some((word) => { //return Bolean value
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length >5;
});
console.log(interestingWords);

console.log(interestingWords.every((word) => {
  return word.length >5;
 } ));






