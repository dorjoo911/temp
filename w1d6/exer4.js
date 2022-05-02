// Create a memoized version of the following fibonacci() recursive method to improve its performance.

// Recursive/not Memorized version
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memorized version
function fibonacci2(element) {
  const sequence = [0, 1];
  for (i = 2; i <= element; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence[element];
}

console.time("Recursive Version");
console.log(fibonacci(2));
console.timeEnd("Recursive Version");

console.time("Memorized Version");
console.log(fibonacci2(2));
console.timeEnd("Memorized Version");
