const str = 'Indivisibilities'.toLowerCase();
const duplicates = str.match(/(.)\1+/g);

console.log(duplicates); // Output: ['i', 's']
