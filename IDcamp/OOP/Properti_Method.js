class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`; //agar tidak dapat diubah
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
    
    //METHODS
    drive() { //FUNGSI YG ADA DI DALAM CLASS
        console.log(`${this.brand} ${this.color} is driving`);
      }
     
    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
      }
     
    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
      }
  }

  const mobil = new Car('TOYOTA','Silver', 300, 200);
  console.log(mobil);
  console.log(mobil.drive());

 //ANOTHER EXAMPLE with PRIVATE METHOD
 class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
      this._id = this._generatedId(); //PRIVATE METHODS
    }
   
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);
   
      setTimeout(() => {
        this.send();
      }, delay);
    }
   
    saveAsDraft() {
      console.log('Saving mail as draft');
    }

    _generatedId() {
        return `${this.send}-${Math.floor(Math.random()*1000)}`;
    }
  } 


