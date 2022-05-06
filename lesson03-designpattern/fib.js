// var fibonacci = (function () {
//   var memo = {};

//   function f(n) {
//     var value;

//     if (n in memo) {
//       value = memo[n];
//     } else {
//       if (n === 0 || n === 1) value = n;
//       else value = f(n - 1) + f(n - 2);

//       memo[n] = value;
//     }

//     return value;
//   }

//   return f;
// })();
// console.log(fibonacci(5));
function fib(n) {
  const memorize = {};

  function helper(n) {
    if (n in memorize) return memorize[n];
    if (n <= 1) return 1;
    return (memorize[n] = helper(n - 1) + helper(n - 2));
  }

  return helper(n);
}
console.log(fib(5));
