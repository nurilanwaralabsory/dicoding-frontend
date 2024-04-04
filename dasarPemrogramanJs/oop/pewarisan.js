// Superclass
// Pewarisan
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService("+6283870407251");
const email = new EmailService("nurilanwaralabsory@gmail.com");

whatsapp.sendMessage("Hello", "+6283870407251");
whatsapp.sendBroadcastMessage("Hello", ["+6283870407251", "+6283870407252"]);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage("Hello", "john@gmail.com");
email.sendDelayedMessage("Hello", "jhon@gmail.com", 3000);
// email.sendBroadcastMessage(); // Error

/* Operator Instanceof */
// cara mengecek jenis dari objek tersebut
// contoh

const whatsapp2 = new WhatsAppService("+628387849087");

console.log(whatsapp instanceof WhatsAppService);
console.log(whatsapp instanceof EmailService);

// Operator instanceof mengembalikan nilai boolean kan menghasilkan nilai true atau false
