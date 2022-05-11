const isPrime = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) reject({ prime: false });
      resolve({ prime: num > 1 });
    }, 500);
  });

async function isPrimeAsync(returnedPromise) {
  console.log(await isPrime(returnedPromise));
}
// async function isPrimeAsync(returnedPromise) {
//   let res = await isPrime(returnedPromise);
//   try {
//     console.log(res);
//   } catch {
//     console.log(err);
//   }
// }

console.log("start");
isPrime(4)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
console.log("end");
