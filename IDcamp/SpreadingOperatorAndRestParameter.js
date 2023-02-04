const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
 
console.log(...favorites);
 
/* Output:
Seafood Salad Nugget Soup
*/

/* Math.max() -> Mencari nilai terbesar */
const numbers = [12, 32, 90, 12, 32];
 
// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]);
 
console.log(Math.max(...numbers));
/* Output:
90
*/

console.log(...favorites, ...numbers);

//REST PARAMETER
function sum(...numbers) {
    var result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
   
  console.log(sum(1, 2, 3, 4, 5));
   
  /* Output:
  15
  */
  const refrigerator = ['Samsung', 50, 2, 'milk', 'cheese', 'egg', 'butter'];
  const [manufacture, weight, door, ...items] = refrigerator;
   
  console.log(manufacture);
  console.log(weight);
  console.log(door);
  console.log(items);
   
  /* Output:
  Samsung
  50
  2
  ["milk", "cheese", "egg", "butter"]
  */
