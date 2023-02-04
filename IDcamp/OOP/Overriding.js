/* Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di 
subclass pada sebuah method yang berasal dari superclass. */

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
    // overriding constructor
    constructor(sender, isBusiness) {
        super(sender);
        this.sender = sender;
        this.isBusiness = isBusiness;
    }
    // Overriding method
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }

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

const whatsapp = new WhatsAppService('+6281234567890', true);
const email = new EmailService('dimas@dicoding.com');

console.log(whatsapp);
whatsapp.sendMessage('YO whaassupp ?', 'Random ppl');