const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

const number = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(number);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/