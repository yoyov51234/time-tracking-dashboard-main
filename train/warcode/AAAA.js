

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  typeof iterable === 'string' ? b = iterable.split('') : b = iterable;


  const c = [];
  for (let i = 0; i < b.length; i++) {
    if (i == 0) {
      c.push(b[i]);
    } else {
      if (b[i] !== b[i - 1]) {
        c.push(b[i]);
      }
    }
  }

  return c;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));