// Write a function to compute the nth Fibonacci number.

// Number.prototype.fibonacci = function () {
//   let value = this;
//   let fibonacciSequence = [0, 1];

//   for (let i = 2; i < value; i++) {
//     fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//   }
//   return fibonacciSequence;
// };

const recursiveFibonacci = (value) => {
  if (value < 2) return value;
  return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2);
};

Number.prototype.fibonacci = function () {
  return recursiveFibonacci(this);
};

const result = Number(8).fibonacci();
console.log(result);
