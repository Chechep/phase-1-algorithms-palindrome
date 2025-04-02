function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
   1. Convert the word into an array using `split("")`.
  2. Reverse the array using `reverse()`.
  3. Convert it back to a string using `join("")`.
  4. Compare the reversed string with the original string.
  5. If they are equal, return `true` (palindrome); otherwise, return `false`.
*/

/*
  Add written explanation of your solution here
  - A palindrome reads the same forward and backward.
  - By reversing the string and comparing it to the original, we can determine if it's a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
