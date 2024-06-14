function duplicateCount(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount("abcde")); // Output: 0
console.log(duplicateCount("aabbcde")); // Output: 2
console.log(duplicateCount("aabBcde")); // Output: 2
console.log(duplicateCount("indivisibility")); // Output: 1
console.log(duplicateCount("Indivisibilities")); // Output: 2
console.log(duplicateCount("aA11")); // Output: 2
console.log(duplicateCount("ABBA")); // Output: 2