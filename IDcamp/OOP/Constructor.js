class Car {
    constructor(brand, color, maxSpeed, chassisNumber) { //constructor(property){}
      this.brand = brand; //property
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
      // Set a random chassis number
      //this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.drive();
  car3.drive();
   
  /* Output
  Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
  Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
  Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
   
  Toyota Silver is driving
  Honda Black is driving
  Suzuki Red is driving
  */

  //METHOD GET AND SET

  class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
   
  /* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */