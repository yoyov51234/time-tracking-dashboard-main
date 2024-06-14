function XO(str) {
  const a = str.match(/[xX]/g) ? str.match(/[xX]/g).length : 0;
  // console.log(a);
  const b = str.match(/[Oo]/g) ? str.match(/[Oo]/g).length : 0;
  // console.log(b);
  return a === b ? true : false
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));