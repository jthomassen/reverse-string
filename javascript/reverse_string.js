function reverseString(str) {
  let reversedString = ''
  i = 0
  while (i < str.length) {
    reversedString = str[i] + reversedString
    i += 1
  }

  return reversedString
}

console.log(reverseString('hello'))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
