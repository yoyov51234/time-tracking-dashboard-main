function persistence(num) {
  let count = 0;

  // Continue loop until num is a single digit
  while (num >= 10) {
    // Split num into digits and multiply them
    num = num.toString().split('').reduce((acc, digit) => acc * digit, 1);
    count++;
  }

  return count;
}

// Test cases
console.log(persistence(39));    // Output: 3 (3*9=27, 2*7=14, 1*4=4)
console.log(persistence(999));   // Output: 4 (9*9*9=729, 7*2*9=126, 1*2*6=12, 1*2=2)
console.log(persistence(4));     // Output: 0 (4 is already a single digit)
