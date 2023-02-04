//FUNCTION BEFORE ES6
// function Car(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
//   }
   
//   Car.prototype.startEngines = function () {
//     console.log('Mobil dinyalakan...');
//     this.enginesActive = true;
//   };
   
//   Car.prototype.info = function () {
//     console.log('Manufacture: ' + this.manufacture);
//     console.log('Color: ' + this.color);
//     console.log('Engines: ' + (this.enginesActive ? 'Active' : 'Inactive'));
//   };
   
//   var johnCar = new Car('Honda', 'Red');
//   johnCar.startEngines();  
//   johnCar.info();
   
  /* Output: 
  Mobil dinyalakan...
  Manufacture: Honda
  Color: Red
  Engines: Active
  */

//ES6 CLASS
 
  class Car {
    // Sama seperti function constructor
    constructor(manufacture, color) {
      this.manufacture = manufacture;
      this._color = color;
      this.enginesActive = false;
    }
   
    // Sama seperti Car.prototype.startEngine
    startEngines() {
      console.log('Mobil dinyalakan...');
      this.enginesActive = true;
    }
   
    // Sama seperti car.prototype.info
    info() {
      console.log(`Manufacture: ${this.manufacture}`);
      console.log(`Color:  ${this.color}`);
      console.log(`Engines: ${this.enginesActive ? 'Active' : 'Inactive'}`);
    }
    get color() {
        return `Warna mobil: ${this._color}`;
      }
     
      set color(value) {
        console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
        this._color = value;
      }
  }
   
  const johnCar = new Car('Honda', 'Red');
  
  johnCar.startEngines();
  johnCar.info();
   
  /* Output: 
  Mobil dinyalakan...
  Manufacture: Honda
  Color: Red
  Engines: Active
  */
 
  const adamCar = new Car('Tesla', 'Black');
   
  console.log(johnCar.manufacture);
  console.log(adamCar.manufacture);

  johnCar.color = "Yellow";
  console.log(`johnCar color is ${johnCar.color}`);

 