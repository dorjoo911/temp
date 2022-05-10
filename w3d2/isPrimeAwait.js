const isPrime = (num) => {
  return new Promise((resolve, reject) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) setTimeout(() => reject({ prime: false }), 500);
      setTimeout(() => resolve({ prime: num > 1 }), 500);
    }
  });
};

// When you finish, test using the code below:

console.log("start");
isPrime(4)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
console.log("end");
