const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */
   
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  console.log(totalScore);
  
  /**
   * output:
   * 313
   * 
   */
  const findJames = students.find(student => student.name === 'James');
  console.log(findJames);
  
  /**
  output
  { name: 'James', score: 88 }
  **/
 
  const array = [1, 2, 3, 4, 5];
  const even = array.some(element => element % 2 === 0);
  
  console.log(even);
  
  /** 
  output true
  **/

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const arrayy1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = arrayy1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
}); /**
* output:
* Hello, Harry!
* Hello, Ron!
* Hello, Jeff!
* Hello, Thomas!
* 
*/


const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
  
  // TODO
let greatAuthors=[];
greatAuthors = books.filter((book) => book.sales > 1000000);
greatAuthors = greatAuthors.map((book) => {return  `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`});
console.log(greatAuthors);  