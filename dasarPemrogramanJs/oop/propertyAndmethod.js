/* property & method */

// cara memproteksi agar nilai dari properti tidak dapat di ubah

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user = new User("John", "Doe");
// console.log(user);
// console.log(user.fullName);

class Car {
  #chassisNumber = null; // enclosing class
  // mendeklarasikan properti memeber visibility private

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car = new Car("BMW", "red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);

/* method */
class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Method
  // method ini dipanggil ketika method sendLater dipanggil
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
    console.log("Saving mail as draft");
  }
}
