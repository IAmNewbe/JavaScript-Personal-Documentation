class Vehicle {
    constructor(licensePlate, manufacture) {
      this.licensePlate = licensePlate;
      this.manufacture = manufacture;
      this.engineActive = false;
    }
   
    startEngines() {
      console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }
   
    info() {
      console.log(`Nomor Kendaraan: ${this.licensePlate}`);
      console.log(`Manufacture: ${this.manufacture}`);
      console.log(`Mesin: ${this.engineActive ? 'Active': 'Inactive'}`);
    }
   
    parking() {
      console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
  }

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
      super(licensePlate, manufacture, wheels);
      this.wheels = wheels;
      this.engineActive = false;
    }

    droveOff() {
      console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
   
    openDoor() {
      console.log(`Membuka pintu!`);
    }
    
    info() {
        super.info();
        console.log(`jumlah Roda : ${this.wheels}`);
    }
  }

  class VehicleFactory {
    repair(vehicles) {
      vehicles.forEach(vehicle => {
        console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
      });
    }
  }

  class Motorcycle extends Vehicle{
    constructor(licensePlate, manufacture, wheels){
      super(licensePlate, manufacture, wheels);
      this.wheels = wheels;
      this.engineActive = false;
    }

    droveOff(){
      console.log(`Motor ${this.licensePlate} dinyalakan...`);
    }

    doWheelie(){
      console.log(`Motor ${this.licensePlate} metek...`);
    }
  }
const car = new Car('P222', 'Toyota', 4);
car.startEngines();
car.info();

 //Repair Class
 const myCar = new Car('H121S', 'Honda', 4);
 const tomMotor = new Motorcycle('GF121J', 'Yamaha', 2);
 const dimasCar = new Car('TA1408K', 'Tesla', 4);

 const vehicleFactory = new VehicleFactory();
 vehicleFactory.repair([myCar, tomMotor, dimasCar]);
 tomMotor.doWheelie();