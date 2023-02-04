let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//Access an Array Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Let and Const Array
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments = ['Mayo'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils[3]);

//Find the Length of an Array
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//Push/Append Method
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//removes last item from an Array
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//Array Picks method
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// groceryList.shift();
// console.log(groceryList); //remove first item

// groceryList.unshift('popcorn');
// console.log(groceryList); //add first item

console.log(groceryList.slice(1,4));
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//Array and Function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);

//nested Array
var numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
console.log(target); 


//Nested Loop
// Write your code below
var bobsFollowers = ['james','tom','joe','bidin'];
var tinasFollowers = ['james','mary','joe'];
var mutualFollowers =[];

for (let i =0; i<bobsFollowers.length; i++){
  for (let j =0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers); //log the same followers


//While
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard != 'spade'){
 currentCard = cards[Math.floor(Math.random() * 4)];
 console.log(currentCard);
}
// Write your code below





