'use strict';

// //Constructor Functions
// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// //   //   this.calcAge = function () {
// //   //     console.log(2037 - this.birthYear);
// //   //   };
// // };

// // Person.hey = function () {
// //   console.log('Hello');
// // };
// // Person.hey();
// // const jonas = new Person('Jonas', 1991);
// // // console.log(jonas.__proto__.hey());
// // console.log(jonas);
// // console.log(jonas instanceof Person);
// // //Prototype
// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };
// // jonas.calcAge();
// // console.log(jonas.__proto__);
// // console.log(Person.prototype);
// // Person.prototype.species = 'Ant';
// // console.log(jonas);
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };
// //////////////////////////////Challenge 1///////////////////////////
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };
// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(this.speed);
// // };
// // Car.prototype.break = function () {
// //   this.speed -= 5;
// //   console.log(this.speed);
// // };

// // const car1 = new Car('BMW', 100);
// // car1.accelerate();
// // car1.break();

// //ES6 classes
// // class expression;
// // const PersonCl = class {};
// //class decleration

class PersonCl {
  constructor(fullName, bithYear) {
    this.fullName = fullName;
    this.birthYear = bithYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    console.log('Age:', this);
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(this);
    if (name.includes(' ')) this._full1Name = name;
    else {
      console.log(`${name} is not a full name`);
    }
  }
  get fullName() {
    return this._full1Name;
  }
  static hey() {
    console.log('Hello form static');
  }
}
PersonCl.hey();
PersonCl.prototype.greet = function () {
  console.log('Hello from ', this._full1Name);
};
const ahmad = new PersonCl('Ahmad Abdullah', 2003);

// // console.log(ahmad.fullName);
// // const account = {
// //   owner: 'Jonas',
// //   movements: [200, 3000, 230, 234],
// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },
// //   set latest(value) {
// //     this.movements.push(value);
// //   },
// // };
// // console.log(account.latest);
// // account.movements = 50;
// // console.log(account.movements);

// //Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 2000);
// steven.calcAge();
// console.log(steven.__proto__);

// ///////////////////////////////Challenge 3///////////////////////////

// // class Car {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// //   accelerate() {
// //     this.speed += 10;
// //     console.log(this.speed);
// //   }
// //   break() {
// //     this.speed -= 5;
// //     console.log(this.speed);
// //   }
// //   get speedUS() {
// //     return this.speed / 1.6;
// //   }
// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }

// // const car = new Car('Ford', 100);
// // car.speedUS = 110;
// // console.log(car.speedUS);

// ///Real inheritance btw classes

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype); //For the link

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const Ahmad = new Student('Ahmad', 2020, 'CS');
// Ahmad.introduce();
// Ahmad.calcAge();
// Student.prototype = Student;

///////////////////////////Challenge 3/////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, batteryCharge) {
  Car.call(this, make, speed);
  this.batteryCharge = batteryCharge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.charge = function (battery) {
  this.batteryCharge = battery;
};
EV.prototype.accelerate = function () {
  console.log(this);
  this.speed += 20;
};

const audi = new EV('audi', 120, 90);
EV.prototype = EV;
audi.accelerate();
audi.charge(95);
audi.accelerate();
audi.charge(100);
console.log(audi);
////////////////////////////////////////////////////////////////////

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce = function () {
    console.log(this);
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };
  calcAge() {
    console.log('Overwrite');
  }
}
const abdullah = new Student('Ahmad ', 2012, 'CS');
abdullah.calcAge();
abdullah.introduce();

////////////////////////////////////////////////
////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
//Prototype chaining
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(this);
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const Ali = Object.create(StudentProto);
Ali.init('Ali ', 1945, 'cs');
Ali.introduce();
Ali.calcAge();

/////////////////////////////////
////////////////////////////////
class Account {
  //Public field (instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    //Protected
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account,${owner}`);
  }
  deposit(val) {
    //
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getMovements() {
    return this.#movements;
  }

  #_approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#_approveLoan(val)) this.deposit(val);
    console.log(`Loan approved`);
  }
}

const acc1 = new Account('Ahmad', 'Dollar', 1234);
acc1.deposit(100);
acc1.withdraw(50);
console.log(acc1);
console.log(acc1.getMovements());
acc1.requestLoan(20);

//////////////////////////////////////////////////////////////////////////////

acc1.deposit(200).withdraw(400).requestLoan(300);
console.log(acc1);

///////////////Challenge 3

class CarCL {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  charge(per) {
    this.#charge = per;
    return this;
  }
}

const rivian = new EVCL('Tesla', 120, 40);
rivian.accelerate();
//////////////////////////////////////