function grow(x) {
  return x.reduce((acc, current) => {
    // console.log(typeof acc);
    // console.log(typeof current);
    // acc = ;
    return acc * current;
  }, 1)

}

console.log(grow([1, 2, 3]));;