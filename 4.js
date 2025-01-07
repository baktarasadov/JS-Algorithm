// Reverse each word in a string.
// Example: "Hello World" → "olleH dlroW"

String.prototype.reverseEachWord = function () {
  let word = "";
  let reverseString = "";
  let value = this;
  for (let i = 0; i <= value.length; i++) {
    if (value[i] == " " || i == value.length) {
      for (let j = word.length - 1; j >= 0; j--) {
        reverseString += word[j];
      }
      if (i != value.length - 1) reverseString += " ";
      word = "";
    } else {
      word += value[i];
    }
  }
  return reverseString;
};

const result = "Hello World".reverseEachWord();

console.log(result);
