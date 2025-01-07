// Write a function to check if a given string is a palindrome.
// Example: "level" → true

// String.prototype.isPalindrome = function () {
//   let reverseString = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     reverseString += this[i];
//     console.log(reverseString);
//   }
//   return reverseString == this;
// };

String.prototype.isPalindrome = function () {
  let i = 0;
  while (i < new Number(this.length / 2)) {
    if (this[i] !== this[this.length - 1 - i]) return false;
    i++;
  }
  return true;
};

const result = "level".isPalindrome();

console.log(result);
