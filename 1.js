// Find the second largest element in an array.

// Array.prototype.maxFirst = function () {
//   let max = this[0];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] > max) {
//       max = this[i];
//     }
//   }

//   return max;
// };

// Array.prototype.maxSecond = function () {
//   let maxSecond = this[0];
//   const maxFirst = this.maxFirst();
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] > maxSecond && this[i] < maxFirst) {
//       maxSecond = this[i];
//     }
//   }

//   return maxSecond;
// };

Array.prototype.maxSecond = function () {
  let firstMax = array[0];
  let secondMax = array[0];
  let i = 0;
  while (i < this.length) {
    if (this[i] > firstMax) {
      secondMax = firstMax;
      firstMax = this[i];
    } else if (this[i] > secondMax && this[i] < firstMax) {
      secondMax = this[i];
    }
    i++;
  }
  return secondMax;
};

const array = new Array(2, 34, 5, 66, 65656, 56);
console.log(array.maxSecond());
