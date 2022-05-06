// Write an implementation for the Observer Pattern where observers have the following format: {'event': [observers]}
// For example:
/*    {
        'eat': [function1, function2],
        'study': [function3, function4, function5]
      }                                             */

/*  This Observable/Subject has two methods:
    on(event, fn): register an observer
    emit(event, message): when this method is called, all observers should be invoked
    Once you finish, use the following code to test:                                     */

class Subject {
  constructor() {
    this.observers = {};
  }

  on(event, fn) {
    if (this.observers[event]) {
      this.observers[event].push(fn);
    } else {
      this.observers[event] = [fn];
    }
  }

  emit(event, message) {
    if (this.observers[event]) {
      this.observers[event].forEach((func) => func(message));
    }
  }
}

const subject = new Subject(); //new subject obj created by Subject constructor class
subject.on("eat", console.log); // register an observer
subject.on("study", console.log); // register an observer

function foo(msg) {
  console.log("foo: " + msg);
}
subject.on("eat", foo);
subject.on("study", foo);

subject.emit("eat", "Corn");
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit("study", "cs445");
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
