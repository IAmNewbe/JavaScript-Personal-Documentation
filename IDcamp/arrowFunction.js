const upperizedNames = ['Dimas', 'Widy', 'Buchori']
    .map(function (name) {
      return name.toUpperCase();
    });
 
console.log(...upperizedNames);
 
/* Output:
DIMAS WIDY BUCHORI
*/
//ARROW FUNCTION
const upperizedName = ['Dimas', 'Widy', 'Buchori']
    .map(name => name.toUpperCase());
 
console.log(...upperizedName);
 
/* Output:
DIMAS WIDY BUCHORI
*/

nama = "hikam";

const sayName = nama => console.log(`Nama saya ${nama}`); //nama is parameter
sayName(nama);

const helloWorld = () => console.log("Hello World"); //No parameter
helloWorld();
    
//if there is logical operations in Arrow Function
const sayHello = language => {
    if (language.toUpperCase() === 'INDONESIA') {
      return 'Selamat Pagi!';
    } else {
      return 'Good Morning!';
    }
  }
   
  console.log(sayHello('Indonesia'));
   
  /* Output:
  Selamat Pagi!
  */

  function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
   
  const programmers = new People('John', 18, ['Coding', 'Read book', 'Ping-pong']);
   
  console.log(programmers.name);
  console.log(programmers.age);
  console.log(programmers.hobby);
   
  /* Output:
  John
  18
  ['Coding', 'Read book', 'Ping-pong']
  */
  function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
   
  // menambahkan introMyself ke People
  People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
      // this -> People
      console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
      console.log(`Hobby saya adalah ${this.hobby}`);
    }, 300);
  };
   
  const programmer = new People('John', 18, ['Coding', 'Read book', 'Ping-pong']);
  programmer.introMyself();
   
  /* Output:
  Hello! Nama saya John, umur saya 18.
  Hobby saya adalah Coding,Read book,Ping-pong
  */
 //DEFAULT PARAMETER

 const greet = (say = "Hello", reply = "World!") => console.log(`${say} ${reply}`);
 
 greet("YO", "Whatsuup");
 greet();

 const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
