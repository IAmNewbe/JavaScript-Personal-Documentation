
//CLASS BAWAAN YG ADA DI JAVASCRIPT

const date = new Date();
 
const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});
 
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});

console.log(timeInTokyo);

//ARRAY
class UniqueArray extends Array {
    constructor(...args) {
      // make sure args is unique before passing it to super
      const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
   
      super(...uniqueValue);
    }
   
    add(item) {
      // make sure only unique item is added
      if (!this.includes(item)) {
        super.push(item);
      }
    }
  }
   
  const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
  console.log(someArray); // ['a', 'b', 'c']
  someArray.add('d');
  console.log(someArray); // ['a', 'b', 'c', 'd']
  someArray.add('a');
  console.log(someArray); // ['a', 'b', 'c', 'd']