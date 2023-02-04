/*
JavaScript memiliki kemampuan First Class Functions, karena 
itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah 
data. Kita bisa menyimpan function dalam variabel, memberikan 
function sebagai parameter pada fungsi 
lainnya, hingga mengembalikan function di dalam function.
*/

/*
Teknik Higher-Order Function biasanya digunakan untuk:

- Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
- Membuat utilities yang dapat digunakan di berbagai tipe data.
- Membuat teknik currying atau function composition.
*/

const hello = () => {
    console.log('Hello!')
  };
  
const say = (someFunction) => {
    someFunction();
}
  
const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}
  
  hello();
  say(hello);
  sayHello()();
  
  /**
   * Hello!
   * Hello!
   * Hello!
   */