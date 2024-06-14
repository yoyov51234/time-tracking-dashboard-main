function countDuplicates(str) {
  const lowerStr = str.toLowerCase();
  const charCount = {};

  // Count occurrences of each character
  for (const char of lowerStr) {
    // abcde

    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count characters that occur more than once
  const duplicates = Object.keys(charCount).filter(char => charCount[char] > 1);

  return duplicates.length;
}

// Test cases
console.log(countDuplicates("abcde")); // Output: 0
console.log(countDuplicates("aabbcde")); // Output: 2
console.log(countDuplicates("aabBcde")); // Output: 2
console.log(countDuplicates("indivisibility")); // Output: 1
console.log(countDuplicates("Indivisibilities")); // Output: 2
console.log(countDuplicates("aA11")); // Output: 2
console.log(countDuplicates("ABBA")); // Output: 2
