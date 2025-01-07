// Find all duplicate elements in an array.
// Example: [1, 2, 2, 3, 4, 4] → [2, 4]

// Array.prototype.duplicateElements = function () {
//   const duplicateArray = [];
//   for (let i = 0; i < this.length - 1; i++) {
//     for (let j = i + 1; j < this.length; j++) {
//       if (this[i] == this[j] && !duplicateArray.includes(this[j])) {
//         duplicateArray.push(this[j]);
//       }
//     }
//   }
//   return duplicateArray;
// };

Array.prototype.duplicateElements = function () {
  const duplicateArray = [];
  const counts = {};
  let i = 0;
  while (i < this.length) {
    let element = this[i];
    counts[element] = (counts[element] || 0) + 1;

    if (counts[element] == 2) {
      duplicateArray.push(element);
    }
    i++;
  }
  return duplicateArray;
};

const array = new Array(2, 34, 5, 66, 65656, 66, 56, 66, 56);
console.log(array.duplicateElements());
