//SET PRIVATE METHOD AGAR TIDAK BISA DIAKSES

class Car {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }

const mobil = new Car('BMW','Red', 300, 200);
console.log(mobil);