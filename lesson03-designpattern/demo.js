// ****** Module Pattern ******

// const counterModule = (function () {
//   let counter = 0;
//   return {
//     incrementCounter: function () {
//       return counter++;
//     },
//     resetCounter: function () {
//       console.log("counter value prior to reset: " + counter);
//       return (counter = 0);
//     },
//   };
// })();

// ****---=== Singleton Pattern ===---****

// const Singleton = (function () {
//   let instance;
//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = new Object("I am the instance");
//       }
//       return instance;
//     },
//   };
// })();
// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();
// console.log("Same instance? " + (instance1 === instance2));

// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = this;
//     }
//     return Singleton.instance;
//   }
// }
// const instance1 = new Singleton();
// const instance2 = new Singleton();
// console.log("Same instance? " + (instance1 === instance2));

// ---===***<<< Observer Pattern >>>***===---

// function Subject() {
//   this.observers = [];
// }

// Subject.prototype = {
//   subscribe: function (fn) {
//     this.observers.push(fn);
//   },

//   emit: function (msg) {
//     this.observers.forEach(function (fn) {
//       fn.call(null, msg);
//     });
//   },
// };
// const subject = new Subject();
// subject.subscribe(console.log);
// subject.emit("Hello");

// class Subject {
//   observers = [];

//   subscribe(observer) {
//     this.observers.push(observer);
//   }

//   next(message) {
//     this.observers.forEach((ob) => {
//       ob.next(message);
//     });
//   }
// }

// const subject = new Subject();
// subject.subscribe({ next: (msg) => console.log("Observer A " + msg) });
// subject.subscribe({ next: (msg) => console.log("Observer B " + msg) });
// subject.subscribe({ next: (msg) => console.log("Observer C " + msg) });
// subject.next("Hello");
// subject.next("Hi");
// subject.next("Hey");

class Info {
  logging(msg) {
    console.info(msg);
  }
}
class Warn {
  logging(msg) {
    console.warn(msg);
  }
}
class Error {
  logging(msg) {
    console.error(msg);
  }
}
class Table {
  logging(msg) {
    console.table(msg);
  }
}

class Strategy {
  setStrategy(loggingMethod) {
    this.loggingMethod = loggingMethod;
  }

  logging(msg) {
    this.loggingMethod.logging(msg);
  }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging("info....");

strategy.setStrategy(new Warn());
strategy.logging("warn....");

strategy.setStrategy(new Error());
strategy.logging("error....");

strategy.setStrategy(new Table());
strategy.logging(["table", "table"]);
