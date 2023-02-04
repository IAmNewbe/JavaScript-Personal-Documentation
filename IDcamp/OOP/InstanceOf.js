//Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek tersebut. 
//Salah satu cara mengetahui jenis objek adalah dengan mengecek rantai prototype-nya. 
//Nah, untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu, 
//kita bisa menggunakan operator instanceof.

//operand1 instanceof operand2 
//operand1: merupakan objek yang ingin dites prototype-nya.
//operand2: merupakan constructor function atau class.

class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
   
  // Subclass
  class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
          this.sendMessage(message, receiver);
        }
      }
  }
   
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }
  }

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true